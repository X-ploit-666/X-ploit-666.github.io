import os
from bs4 import BeautifulSoup

# Define the target directory
target_directory = '/tmp/BattleField/Panel-Pix/www.panel-pix.com'

# Define the links to search for
links_to_find = [
    "MICROCEMENT",
    "RESIN WASHED STONE",
    "FURNITURE",
    "TO BE PARTNER"
]

# Function to check if any of the links are in the <li> element
def contains_target_link(li_element):
    for link in links_to_find:
        if link in li_element.text:
            return True
    return False

# Function to process each HTML file
def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    soup = BeautifulSoup(content, 'html.parser')
    
    # Find all <li> elements
    li_elements = soup.find_all('li')
    
    # Remove <li> elements that contain the target links
    for li in li_elements:
        if contains_target_link(li):
            li.decompose()  # Remove the <li> element from the soup
    
    # Write the modified content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(str(soup))

# Function to recursively process all files in the directory
def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                process_file(os.path.join(root, file))

# Start processing
process_directory(target_directory)