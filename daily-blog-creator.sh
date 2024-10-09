#!/bin/bash
set -eu
# Get the current date in the format yyyymmdd
current_date=$(date +%F)

# Check if at least one argument is provided
if [ $# -lt 1 ]; then
  echo "Blog name is required. Usage: cmd blog_name"
  exit 1
fi

# Combine all positional parameters as the blog name
blog_name="$*"

title_blog_name=$(echo "$blog_name" | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2));} 1')
snake_blog_name=$(echo "$blog_name" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

# Define the file name
file_name="journal/${current_date}-${snake_blog_name}.md"

# Check if the file already exists
if [ -e "$file_name" ]; then
  echo "File '$file_name' already exists. Aborting."
  exit 0
fi

# Create the content
content="---
title: ${current_date} ${title_blog_name}
slug: $(date +%Y)/${snake_blog_name}
tags:
- '$(date +%Y-%m)'
- '$(date +%Y)'
hide_table_of_contents: true
---
Today has been a please do something ab<!-- truncate -->out this and those.
"

# Write the content to the file
echo "$content" > "$file_name"

# Print a message indicating the file has been created
echo "File ${file_name} has been created with the specified content."
