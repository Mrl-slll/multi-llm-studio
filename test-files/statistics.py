"""
Test Python Script for Multi-LLM Studio
This file demonstrates code file upload support
"""

def calculate_binomial_probability(n, k, p):
    """
    Calculate binomial probability P(X = k) for n trials with probability p
    
    Args:
        n: number of trials
        k: number of successes
        p: probability of success
    
    Returns:
        float: probability value
    """
    from math import factorial, comb
    
    # Binomial coefficient C(n,k)
    binomial_coeff = comb(n, k)
    
    # Calculate probability
    prob = binomial_coeff * (p ** k) * ((1 - p) ** (n - k))
    
    return prob


def normal_pdf(x, mu=0, sigma=1):
    """
    Calculate normal distribution probability density function
    
    Args:
        x: value
        mu: mean (default 0)
        sigma: standard deviation (default 1)
    
    Returns:
        float: PDF value at x
    """
    import math
    
    coefficient = 1 / (sigma * math.sqrt(2 * math.pi))
    exponent = -((x - mu) ** 2) / (2 * sigma ** 2)
    
    return coefficient * math.exp(exponent)


# Example usage
if __name__ == "__main__":
    # Test binomial
    print("Binomial P(X=3 | n=10, p=0.5):", calculate_binomial_probability(10, 3, 0.5))
    
    # Test normal
    print("Normal PDF at x=0:", normal_pdf(0, mu=0, sigma=1))
