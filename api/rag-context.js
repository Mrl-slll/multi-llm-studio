// Shared knowledge base loader for Vercel serverless functions
const academicsKB = require('../uw-knowledge/academics.js');
const studentLifeKB = require('../uw-knowledge/studentlife.js');

/**
 * Get relevant context from knowledge base based on mode and query
 * @param {string} query - User's question
 * @param {string} mode - 'academic' or 'studentlife'
 * @returns {string} - Formatted context string
 */
function getRelevantContext(query, mode) {
  const lowerQuery = query.toLowerCase();
  
  if (mode === 'academic') {
    let context = "You are a helpful AI assistant for UW-Madison students, specializing in academic support.\n\n";
    context += "**IMPORTANT: When explaining mathematical concepts, formulas, or equations:**\n";
    context += "- Use LaTeX math notation wrapped in $ for inline math (e.g., $x^2 + 5$)\n";
    context += "- Use $$ for display math/block equations (e.g., $$\\int_a^b x^2 dx$$)\n";
    context += "- Always format statistical formulas, calculus notation, and economic equations in LaTeX\n\n";
    context += "**For charts, graphs, distributions, or visualizations:**\n";
    context += "- Include chart data in a ```chart code block with JSON format\n";
    context += "- Example: ```chart\\n{\"type\":\"bar\",\"data\":{\"labels\":[\"0\",\"1\",\"2\"],\"datasets\":[{\"label\":\"Frequency\",\"data\":[10,20,15],\"backgroundColor\":\"rgba(197,5,12,0.6)\"}]}}\\n```\n";
    context += "- Auto-generated chart types: binomial/dbinom/histogram, normal distribution, t-distribution, boxplot, scatter plot, bar chart, line plot, Q-Q plot, confidence intervals, regression\n";
    context += "- Simply mention the chart type in your response (e.g., 'Here's a binomial distribution...', 'This scatter plot shows...') and it will be auto-generated\n";
    context += "- Supported types: bar, line, scatter, pie\n";
    context += "- Always provide text explanation along with the chart\n";
    context += "- Use cardinal red color rgba(197,5,12,0.6) for UW-Madison theme\n\n";
    
    // Check if query mentions specific course - use exact course code matching
    const courses = academicsKB.courses;
    const courseMapping = academicsKB.courseMapping || {};
    
    // Find matching course with improved accuracy
    let matchedCourse = null;
    let matchedCourseId = null;
    
    for (const [courseId, course] of Object.entries(courses)) {
      // Normalize course ID (e.g., "CS_300" -> "cs 300" and "cs300")
      const normalizedId = courseId.toLowerCase().replace('_', ' ');
      const compactId = courseId.toLowerCase().replace('_', '');
      
      // Check for exact course code match (e.g., "CS 300", "CS300")
      if (lowerQuery.includes(normalizedId) || lowerQuery.includes(compactId)) {
        matchedCourse = course;
        matchedCourseId = courseId;
        break;
      }
    }
    
    // If course found, provide detailed course information
    if (matchedCourse && matchedCourseId) {
      const displayId = matchedCourseId.replace('_', ' ');
      context += `**${matchedCourse.name} (${displayId})**\n`;
      context += `Credits: ${matchedCourse.credits} | Prerequisites: ${matchedCourse.prerequisites}\n`;
      context += `${matchedCourse.description}\n\n`;
      context += `**Topics Covered:**\n${matchedCourse.topics.map(t => `- ${t}`).join('\n')}\n\n`;
      context += `Difficulty: ${matchedCourse.difficulty}\n`;
      context += `Workload: ${matchedCourse.workload}\n\n`;
      context += `**Study Tips for ${displayId}:**\n${matchedCourse.tips.map(t => `- ${t}`).join('\n')}\n\n`;
      
      // Add common questions if query seems like a question
      if (matchedCourse.common_questions && 
          (lowerQuery.includes('?') || lowerQuery.includes('how') || 
           lowerQuery.includes('what') || lowerQuery.includes('is'))) {
        context += `**Common Questions about ${displayId}:**\n`;
        for (const [q, a] of Object.entries(matchedCourse.common_questions)) {
          context += `Q: ${q}\nA: ${a}\n\n`;
        }
      }
      
      // Add professor tips if available
      if (matchedCourse.professor_tips) {
        context += `**Professor Tips:** ${matchedCourse.professor_tips}\n\n`;
      }
      
      // Add note about correct course identification
      context += `\n[Note: This information is specifically for ${displayId} - ${matchedCourse.name}. Make sure to verify you're asking about the correct course.]\n\n`;
    }
    
    // Add general study tips if query is about studying/exams
    if (lowerQuery.includes('study') || lowerQuery.includes('exam') || 
        lowerQuery.includes('test') || lowerQuery.includes('prepare')) {
      context += `**Study Tips:**\n`;
      context += academicsKB.study_tips.general.map(t => `- ${t}`).join('\n') + '\n\n';
      context += `**Exam Preparation:**\n`;
      context += academicsKB.study_tips.exam_prep.map(t => `- ${t}`).join('\n') + '\n\n';
    }
    
    // Add tutoring resources if query mentions help/tutoring
    if (lowerQuery.includes('tutor') || lowerQuery.includes('help') || lowerQuery.includes('stuck')) {
      const resources = academicsKB.resources;
      context += `**Tutoring Resources:**\n`;
      context += `- **MERIT:** ${resources.tutoring.MERIT.description} (${resources.tutoring.MERIT.location}, ${resources.tutoring.MERIT.hours})\n`;
      context += `- **GUTS:** ${resources.tutoring.GUTS}\n`;
      context += `- Office hours: ${resources.tutoring.office_hours}\n\n`;
    }
    
    return context;
  } 
  
  else if (mode === 'studentlife') {
    let context = "You are a helpful AI assistant for UW-Madison students, specializing in campus life and resources.\n\n";
    
    // Study room booking
    if (lowerQuery.includes('study room') || lowerQuery.includes('book') || 
        lowerQuery.includes('reserve') || lowerQuery.includes('libcal')) {
      const booking = studentLifeKB.study_rooms.booking;
      context += `**Study Room Booking (${booking.system}):**\n`;
      context += booking.how_to.join('\n') + '\n\n';
      context += `**Tips:**\n${booking.tips.map(t => `- ${t}`).join('\n')}\n\n`;
      context += `**Locations:**\n`;
      for (const [name, details] of Object.entries(booking.locations)) {
        context += `\n**${name}:** ${details.address}\n`;
        context += `- ${details.best_for}\n`;
        context += `- Features: ${details.features}\n`;
      }
      context += '\n';
    }
    
    // Dining
    if (lowerQuery.includes('food') || lowerQuery.includes('meal') || 
        lowerQuery.includes('dining') || lowerQuery.includes('eat')) {
      const dining = studentLifeKB.dining;
      context += `**Meal Plans:**\n`;
      for (const [planName, plan] of Object.entries(dining.meal_plans.types)) {
        context += `\n**${planName}:** ${plan.description}\n`;
        context += `- Cost: ${plan.cost}\n`;
        context += `- Best for: ${plan.best_for}\n`;
      }
      context += '\n**Dining Halls:**\n';
      for (const [hall, details] of Object.entries(dining.meal_plans.dining_halls)) {
        context += `\n**${hall}:** ${details.location}\n`;
        context += `- ${details.popular_items || details.vibe}\n`;
      }
      context += '\n';
    }
    
    // Gym/Recreation
    if (lowerQuery.includes('gym') || lowerQuery.includes('workout') || 
        lowerQuery.includes('fitness') || lowerQuery.includes('nick') || 
        lowerQuery.includes('serf') || lowerQuery.includes('rec')) {
      const gym = studentLifeKB.gym;
      context += `**Recreation Facilities:**\n`;
      for (const [name, facility] of Object.entries(gym.facilities)) {
        context += `\n**${name}:** ${facility.location}\n`;
        context += `- Hours: ${facility.hours}\n`;
        context += `- Features: ${facility.features.slice(0, 5).join(', ')}\n`;
        if (facility.best_for) context += `- Best for: ${facility.best_for}\n`;
      }
      context += `\n**Access:** ${gym.access.cost} - ${gym.access.required}\n\n`;
      context += `**Tips:**\n${gym.tips.map(t => `- ${t}`).join('\n')}\n\n`;
    }
    
    // Health services
    if (lowerQuery.includes('health') || lowerQuery.includes('sick') || 
        lowerQuery.includes('doctor') || lowerQuery.includes('uhs') || 
        lowerQuery.includes('caps') || lowerQuery.includes('mental')) {
      const health = studentLifeKB.health;
      context += `**University Health Services (UHS):**\n`;
      context += `Location: ${health["University Health Services (UHS)"].location}\n`;
      context += `Hours: ${health["University Health Services (UHS)"].hours}\n`;
      context += `Services: ${health["University Health Services (UHS)"].services.slice(0, 6).join(', ')}\n`;
      context += `Appointments: ${health["University Health Services (UHS)"].appointments}\n\n`;
      
      if (lowerQuery.includes('mental') || lowerQuery.includes('caps') || lowerQuery.includes('counsel')) {
        const caps = health["CAPS (Counseling & Psychiatric Services)"];
        context += `**CAPS (Mental Health):**\n`;
        context += `${caps.description}\n`;
        context += `Services: ${caps.services.join(', ')}\n`;
        context += `Access: ${caps.access}\n`;
        context += `Emergency: ${caps.emergency}\n\n`;
      }
    }
    
    // Housing
    if (lowerQuery.includes('hous') || lowerQuery.includes('dorm') || 
        lowerQuery.includes('apartment') || lowerQuery.includes('live')) {
      const housing = studentLifeKB.housing;
      context += `**On-Campus Housing:**\n`;
      for (const [area, details] of Object.entries(housing.on_campus)) {
        context += `\n**${area}:**\n`;
        context += `- Vibe: ${details.vibe}\n`;
        context += `- Best for: ${details.best_for}\n`;
        context += `- Pros: ${details.pros.join(', ')}\n`;
      }
      
      if (lowerQuery.includes('off') || lowerQuery.includes('apartment')) {
        context += `\n**Off-Campus Areas:**\n`;
        for (const [area, details] of Object.entries(housing.off_campus.popular_areas)) {
          context += `\n**${area}:** ${details.location}\n`;
          context += `- Pros: ${details.pros}\n`;
          context += `- Cons: ${details.cons}\n`;
        }
        context += `\n**Tips:**\n${housing.off_campus.tips.slice(0, 5).map(t => `- ${t}`).join('\n')}\n\n`;
      }
    }
    
    // Transportation
    if (lowerQuery.includes('bus') || lowerQuery.includes('bike') || 
        lowerQuery.includes('transport') || lowerQuery.includes('get to')) {
      const transport = studentLifeKB.transportation;
      context += `**Madison Metro:**\n`;
      context += `Cost: ${transport["Madison Metro"].cost}\n`;
      context += `Popular routes: ${Object.entries(transport["Madison Metro"].popular_routes).map(([num, desc]) => `${num} - ${desc}`).join(', ')}\n`;
      context += `Tips:\n${transport["Madison Metro"].tips.map(t => `- ${t}`).join('\n')}\n\n`;
      
      if (lowerQuery.includes('bike')) {
        context += `**Biking:**\n`;
        context += `${transport.biking.infrastructure}\n`;
        context += `Safety:\n${transport.biking.safety.map(t => `- ${t}`).join('\n')}\n\n`;
      }
    }
    
    return context;
  }
  
  // Default fallback
  return "You are a helpful AI assistant for UW-Madison students. Provide accurate, supportive guidance.\n\n";
}

module.exports = { getRelevantContext };
