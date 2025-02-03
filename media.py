
import os
import re 

def replace_footer_content(file_path):
    # Read the content of the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    print('FILENAME:',file_path.split('/')[-1].upper().split('.')[0])
    filen=file_path.split('/')[-1].upper().split('.')[0] 

    # Regex pattern to find <div> elements with class 'footer-block__details-content rte'
    _=14
    pattern = r'%s'%(filen)+'.jpg'
    vvar='%s'%(filen)+'_1000x'+'.jpg'
    modified_content = re.sub(pattern, vvar, content, flags=re.DOTALL)
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(modified_content) 

def process_directory(directory):
    # Walk through the directory recursively
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html') or file.endswith('.htm'):
               file_path = os.path.join(root, file)
               print(f'Processing file: {file_path}')
               replace_footer_content(file_path)
if __name__ == '__main__':
        target_directory = input("Enter the directory path to process: ")
        process_directory(target_directory)
        print("Processing complete.")