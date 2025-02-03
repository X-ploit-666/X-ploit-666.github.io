import os
import re

def replace_footer_content(file_path):
    # Read the content of the file
        with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
                        print('FILENAME:',file_path.split('/')[-1].upper().split('.')[0])
                            filen=file_path.split('/')[-1].upper().split('.')[0]

                                # Regex pattern to find <div> elements with class 'footer-block__details-content rte'
                                    _=13
                                        pattern = r'%s'%(filen)+'_'+str(_)+'.jpg'
                                            vvar='%s'%(filen)+'_'+str(_)+'_1000x'+'.jpg'
                                                modified_content = re.sub(pattern, vvar, content, flags=re.DOTALL)
                                                    with open(file_path, 'w', encoding='utf-8') as file:
                                                            file.write(modified_content)

                                                            def process_directory(directory):
                                                                # Walk through the directory recursively
                                                                    for root, dirs, files in os.walk(directory):
                                                                            for file in files:
                                                                                        if file.endswith('.html') or file.endswith('.htm'):  # Adjust file types as needed
                                                                                                        file_path = os.path.join(root, file)
h.join(root, file)
                         file_path = os.path.join(root, file)
 os.path.join(root, file)
                                                         f

old="""
import os
import re 

def replace_footer_content(file_path):
    # Read the content of the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read() 
        # Regex pattern to find image paths
    pattern = r'..\/cdn\/shop\/files\/(.*?\.jpg)' 

        # Find all matches of the pattern
    matches = re.findall(pattern, content) 

    # Process the matches in pairs and replace them in the content
    for i in range(0, len(matches) - 1, 2):# Loop through pairs (1st with 2nd, 3rd with 4th, etc.)
        first_match = matches[i]
        second_match = matches[i + 1]
        # Construct the modified image URLs with "&width=1946"
        first_replacement = f'../cdn/shop/files/{first_match}'
        second_replacement = f'../cdn/shop/files/{second_match}&width=1946'
        content = content.replace(f'../cdn/shop/files/{first_match}.jpg', first_replacement)
        content = content.replace(f'../cdn/shop/files/{second_match}.jpg', second_replacement) 

    # Write the modified content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content) 

def process_directory(directory):
    # Walk through the directory recursively
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html') or file.endswith('.htm'):# Adjust file types as needed
                file_path = os.path.join(root, file)
                print(f'Processing file: {file_path}')
                replace_footer_content(file_path) 

if __name__ == '__main__':
    target_directory = input("Enter the directory path to process: ")
    process_directory(target_directory)
    print("Processing complete.")
"""