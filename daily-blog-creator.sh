#!/bin/bash
set -eu
# Get the current date in the format yyyymmdd
current_date=$(date +%F)

# Define the file name
file_name="journal/${current_date}-daily-journal.md"
# Check if the file already exists
if [ -e "$file_name" ]; then
  echo "File '$file_name' already exists. Aborting."
  exit 0
fi

# Create the content
content="---
title: ${current_date} <Change ME>
slug: $(date +%Y)/<change me>
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
