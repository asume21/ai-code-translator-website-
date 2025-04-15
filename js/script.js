document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Code examples rotation
    const demoButton = document.querySelector('.demo-controls .btn');
    if (demoButton) {
        const codeExamples = [
            {
                from: {
                    language: 'Python',
                    code: `def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    
    return fib

result = fibonacci(10)
print(result)`
                },
                to: {
                    language: 'JavaScript',
                    code: `function fibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }
    
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }
    
    return fib;
}

const result = fibonacci(10);
console.log(result);`
                }
            },
            {
                from: {
                    language: 'PHP',
                    code: `<?php
function connect_to_db($user, $password) {
    $conn = mysqli_connect("localhost", $user, $password);
    
    // Insecure: SQL injection vulnerability
    $query = "SELECT * FROM users WHERE username = '" . $_GET['username'] . "'";
    $result = mysqli_query($conn, $query);
    
    return $result;
}

// Insecure: Password stored in plaintext
$password = "admin123";
$result = connect_to_db("admin", $password);
?>`
                },
                to: {
                    language: 'PHP (Secured)',
                    code: `<?php
function connect_to_db($user, $password) {
    $conn = mysqli_connect("localhost", $user, $password);
    
    // Secure: Prepared statement prevents SQL injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $_GET['username']);
    $stmt->execute();
    $result = $stmt->get_result();
    
    return $result;
}

// Secure: Password hashing
$password = password_hash("admin123", PASSWORD_BCRYPT);
$result = connect_to_db("admin", $password);
?>

/* Vulnerability Scanner detected:
 * - SQL Injection vulnerability (FIXED)
 * - Plaintext password storage (FIXED)
 */`
                }
            },
            {
                from: {
                    language: 'Java',
                    code: `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        System.out.println("Sorted array:");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}`
                },
                to: {
                    language: 'C++',
                    code: `#include <iostream>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    bubbleSort(arr, n);
    
    std::cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        std::cout << arr[i] << " ";
    }
    
    return 0;
}`
                }
            },
            {
                from: {
                    language: 'C#',
                    code: `using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        Dictionary<string, int> scores = new Dictionary<string, int>() {
            {"Alice", 95},
            {"Bob", 82},
            {"Charlie", 88},
            {"David", 90}
        };
        
        Console.WriteLine("Student scores:");
        foreach (var student in scores) {
            Console.WriteLine($"{student.Key}: {student.Value}");
        }
        
        // Calculate average
        int sum = 0;
        foreach (var score in scores.Values) {
            sum += score;
        }
        
        double average = (double)sum / scores.Count;
        Console.WriteLine($"Average score: {average:F2}");
    }
}`
                },
                to: {
                    language: 'Python',
                    code: `def main():
    scores = {
        "Alice": 95,
        "Bob": 82,
        "Charlie": 88,
        "David": 90
    }
    
    print("Student scores:")
    for student, score in scores.items():
        print(f"{student}: {score}")
    
    # Calculate average
    sum_scores = sum(scores.values())
    average = sum_scores / len(scores)
    
    print(f"Average score: {average:.2f}")

if __name__ == "__main__":
    main()`
                }
            }
        ];
        
        let currentExampleIndex = 0;
        
        demoButton.addEventListener('click', function() {
            currentExampleIndex = (currentExampleIndex + 1) % codeExamples.length;
            updateCodeExample(codeExamples[currentExampleIndex]);
        });
        
        function updateCodeExample(example) {
            const fromLanguageElement = document.querySelector('.code-example:first-child .code-header span');
            const fromCodeElement = document.querySelector('.code-example:first-child code');
            const toLanguageElement = document.querySelector('.code-example:last-child .code-header span');
            const toCodeElement = document.querySelector('.code-example:last-child code');
            
            fromLanguageElement.textContent = example.from.language;
            fromCodeElement.textContent = example.from.code;
            fromCodeElement.className = 'language-' + example.from.language.toLowerCase();
            
            toLanguageElement.textContent = example.to.language;
            toCodeElement.textContent = example.to.code;
            toCodeElement.className = 'language-' + example.to.language.toLowerCase();
            
            // Re-highlight code
            hljs.highlightAll();
        }
    }
    
    // Add animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .benefit-card, .download-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .benefit-card, .download-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .feature-card.animate, .benefit-card.animate, .download-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Form submission handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Show success message
                const successMessage = document.createElement('p');
                successMessage.textContent = 'Thank you for subscribing!';
                successMessage.style.color = '#28a745';
                
                const formParent = this.parentNode;
                formParent.appendChild(successMessage);
                
                // Clear input
                emailInput.value = '';
                
                // Remove message after 3 seconds
                setTimeout(() => {
                    formParent.removeChild(successMessage);
                }, 3000);
            } else {
                // Show error message
                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'Please enter a valid email address.';
                errorMessage.style.color = '#dc3545';
                
                const formParent = this.parentNode;
                formParent.appendChild(errorMessage);
                
                // Remove message after 3 seconds
                setTimeout(() => {
                    formParent.removeChild(errorMessage);
                }, 3000);
            }
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
