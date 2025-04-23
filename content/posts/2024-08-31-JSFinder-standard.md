---
title: Discovering JavaScript Files with JSFinder
date: '2024-08-31'
author: Bhaskar
categories:
  - security
  - development
  - web scraping
  - tools
tags:
  - JavaScript
  - Security
  - Web Scraping
  - Python
  - Automation
  - Development
  - Tools
  - Vulnerabilities
description: >-
  A detailed guide to JSFinder, a tool for discovering JavaScript files across
  subdomains, including its features, setup, and advanced usage.
images:
  - >-
    https://raw.githubusercontent.com/bhaskarvilles/JSFinder/JSFinder-main/JSFinder%20Results.png
featured: false
---

# Discovering JavaScript Files with JSFinder

## Introduction

### The Need for JavaScript Discovery
JavaScript is the backbone of modern web applications, driving dynamic behavior, interactivity, and user engagement. However, the same flexibility that makes JavaScript powerful also makes it a prime target for security vulnerabilities, such as cross-site scripting (XSS), data leakage, and unauthorized access. Identifying and analyzing JavaScript files across various subdomains is crucial for security researchers and developers aiming to secure their applications. Manual inspection of each subdomain is time-consuming and prone to errors, which is where automation tools like JSFinder come into play.

### What is JSFinder?
JSFinder is a Python-based tool that automates the process of discovering JavaScript files across a list of subdomains. By leveraging web scraping techniques, JSFinder fetches the HTML content of each subdomain, parses it, and identifies all linked JavaScript files. This tool is particularly useful for security researchers, penetration testers, and developers who need to analyze JavaScript files for potential vulnerabilities or for simply understanding the structure of a web application.

## Key Features of JSFinder

### Subdomain Scanning
JSFinder allows users to input a list of subdomains, which the tool then scans to discover JavaScript files. This feature is crucial for comprehensive security assessments, where every subdomain might host important JavaScript files that could contain vulnerabilities.

### Output to File
JSFinder offers the ability to save all discovered JavaScript URLs into a specified output file. This feature is particularly useful for further analysis, allowing users to easily access and review the list of JavaScript files without the need to re-run the scan.

### Verbose Mode
The verbose mode in JSFinder provides detailed output during the scanning process. It logs each step, making it easier to troubleshoot issues or understand the flow of operations. This feature is especially beneficial for users who want to monitor the tool's progress or who are debugging issues with their subdomains.

### Error Handling
JSFinder is designed to handle errors gracefully. Whether it's a connection issue or an unexpected response from a server, JSFinder provides meaningful error messages that help users understand what went wrong during the scanning process.

## Setting Up JSFinder

### Prerequisites
Before you can use JSFinder, you need to have Python 3.x installed on your machine. Additionally, JSFinder requires the `requests` and `beautifulsoup4` libraries. These can be easily installed using pip:

```bash
pip install requests beautifulsoup4
```

### Installing JSFinder
To get started with JSFinder, clone the repository from GitHub:

```bash
git clone https://github.com/yourusername/jsfinder.git
cd jsfinder
```

### Running JSFinder
Once you've installed the necessary dependencies, you can run JSFinder with the following command:

```bash
python jsfinder.py -f subdomains.txt -o js_output.txt -v
```

- `-f` specifies the input file containing the list of subdomains.
- `-o` specifies the output file where the discovered JavaScript URLs will be saved.
- `-v` enables verbose mode for detailed output.

### Example Input File
The input file should contain one subdomain per line, for example:

```
example.com
test.example.com
sub.example.com
```

### Output File
The output file will contain the full URLs of all JavaScript files discovered:

```
https://example.com/js/app.js
https://example.com/js/vendor.js
https://test.example.com/assets/main.js
```
![JS SCANNING Results](https://raw.githubusercontent.com/bhaskarvilles/JSFinder/JSFinder-main/JSFinder%20Results.png)
## Use Cases

### Security Assessments
One of the primary use cases for JSFinder is in security assessments. Penetration testers and security researchers often need to map out all JavaScript files associated with a web application to identify potential vulnerabilities. JSFinder automates this process, saving valuable time and ensuring comprehensive coverage of all subdomains.

### Web Application Development
For developers, JSFinder can be used to ensure that all JavaScript files across various subdomains are accounted for and up-to-date. This is particularly useful in large projects where different teams may be responsible for different subdomains.

### Asset Discovery
JSFinder can also be used as part of a broader asset discovery process, where organizations aim to map out all their digital assets, including JavaScript files. This is an essential step in understanding the full scope of an organization's attack surface.

## Behind the Scenes: How JSFinder Works

### Web Scraping with `requests` and `BeautifulSoup`
At the core of JSFinder is its ability to fetch and parse HTML content from web pages. This is achieved using the `requests` library to send HTTP requests and `BeautifulSoup` to parse the HTML. JSFinder specifically looks for `<script>` tags with a `src` attribute, which typically points to an external JavaScript file.

Here's a breakdown of the core logic:

1. **Fetching HTML Content:**
   JSFinder sends an HTTP GET request to the subdomain URL using the `requests.get()` function. It then checks for any HTTP errors that may occur during the request.

   ```python
   response = requests.get(base_url)
   response.raise_for_status()  # Check for HTTP errors
   ```

2. **Parsing HTML with BeautifulSoup:**
   Once the HTML content is fetched, it's passed to `BeautifulSoup` for parsing. JSFinder looks for all `<script>` tags with the `src` attribute.

   ```python
   soup = BeautifulSoup(response.content, 'html.parser')
   js_urls = [urljoin(base_url, script['src']) for script in soup.find_all('script', src=True)]
   ```

3. **Handling Errors:**
   If any errors occur during the request (e.g., connection issues, timeouts), JSFinder catches these exceptions and prints a meaningful error message.

   ```python
   except requests.exceptions.RequestException as e:
       print(f"Error fetching {base_url}: {e}")
   ```

### URL Joining with `urljoin`
JSFinder uses the `urljoin` function from Python’s `urllib.parse` module to combine the base URL of the subdomain with the relative path of the JavaScript file. This ensures that the output file contains fully qualified URLs.

### Saving Output
After discovering all JavaScript files for a given subdomain, JSFinder saves the results to an output file. This is done by iterating over the list of URLs and writing each one to the file:

```python
with open(args.output, 'w') as output_file:
    for js_url in js_urls_found:
        output_file.write(js_url + "\n")
```

## Advanced Usage

### Modifying for HTTP Subdomains
While JSFinder assumes that subdomains use HTTPS, some subdomains might still be using HTTP. To modify the script for these cases, you can update the `base_url` construction:

```python
base_url = f"http://{subdomain}"
```

Alternatively, you could add a command-line argument that allows the user to specify whether to use HTTP or HTTPS.

### Integration with Other Tools
JSFinder can be easily integrated with other security tools and pipelines. For example, it could be used in conjunction with a vulnerability scanner that specifically targets JavaScript files. By automating the discovery of these files, JSFinder helps ensure that no potential attack vectors are missed.

### Extending JSFinder
JSFinder is designed to be simple yet powerful, but it can be extended in various ways:

- **JavaScript Content Analysis:** After finding the JavaScript files, JSFinder could be extended to download and analyze the content of each file for common vulnerabilities.
- **Crawl Subdomains:** Instead of relying on a predefined list, JSFinder could be extended to crawl and discover subdomains automatically.
- **Headless Browser Integration:** For sites that rely heavily on JavaScript to render content, integrating a headless browser like Selenium could improve JSFinder’s ability to find dynamically loaded JavaScript files.

## Real-World Applications

### Case Study: Security Testing
Consider a scenario where a security researcher is tasked with assessing a large web application that includes several subdomains. Instead of manually visiting each subdomain and inspecting the source code, the researcher uses JSFinder to automate the discovery process. Within minutes, JSFinder produces a comprehensive list of all JavaScript files across all subdomains, allowing the researcher to focus on analyzing the content for vulnerabilities.

### Case Study: Development Workflow
In a large development team, different members might be responsible for different parts of a web application, including various subdomains. A lead developer could use JSFinder as part of the continuous integration/continuous deployment (CI/CD) pipeline to ensure that all JavaScript files across subdomains are up-to-date and correctly linked.

## Potential Improvements and Future Development

### Support for Asynchronous Requests
One of the limitations of the current version of JSFinder is that it makes HTTP requests synchronously. For large lists of subdomains, this can slow down the scanning process. Implementing asynchronous requests using a library like `aiohttp` could significantly improve the tool's performance.

### Enhanced Error Handling
While JSFinder already provides basic error handling, future versions could include more sophisticated error handling mechanisms, such as retry logic for transient errors or logging errors to a file for post-analysis.

### User Interface
For non-technical users, a simple graphical user interface (GUI) could make JSFinder more accessible. This interface could provide options for setting input/output files, toggling verbose mode, and even displaying the results in a more user-friendly format.

## Conclusion

### Summary of JSFinder’s Benefits
JSFinder is a versatile and powerful tool that addresses a critical need in the realm of web security and development: the discovery of

 JavaScript files across subdomains. By automating this process, JSFinder saves time, ensures comprehensive coverage, and provides users with valuable insights into the structure and security of their web applications.

### Call to Action
If you’re a security researcher, developer, or anyone interested in web application security, give JSFinder a try. It’s a simple yet effective tool that can make your job easier and more efficient. Contributions to the project are welcome, and you can find the source code on GitHub.

### Next Steps
Looking ahead, there are numerous opportunities to enhance and extend JSFinder. Whether through performance optimizations, new features, or better integration with other tools, the future of JSFinder is bright. Join the project, contribute to its development, and help make the web a safer place for everyone.
