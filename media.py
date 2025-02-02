import os
import re

def replace_footer_content(file_path):
    # Read the content of the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    vvar="https://api.whatsapp.com/"
    # Regex pattern to find <div> elements with class 'footer-block__details-content rte'
    pattern = r'whatsapp://'
    # Replace matched content with empty string
    modified_content = re.sub(pattern, vvar, content, flags=re.DOTALL)

    # Write the modified content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(modified_content)

def process_directory(directory):
    # Walk through the directory recursively
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html') or file.endswith('.htm'):  # Adjust file types as needed
                file_path = os.path.join(root, file)
                print(f'Processing file: {file_path}')
                replace_footer_content(file_path)

if __name__ == '__main__':
    target_directory = input("Enter the directory path to process: ")
    process_directory(target_directory)
    print("Processing complete.")
#href="https://wa.me/8613378643944"