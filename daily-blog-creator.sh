#!/bin/bash
set -eu
# Get the current date in the format yyyymmdd
current_date=$(date +%Y%m%d)

# Define the file name
file_name="journal/${current_date}-daily-journal.md"

# Create the content
content="---
title: $(date +%F) Daily Journal
slug: ${current_date}-daily-journal
authors: [umesh]
tags:
- '$(date +%Y-%m)'
- '$(date +%Y)'
- journal
- daily
hide_table_of_contents: true
---
Today has been a please do something ab<!-- truncate -->out this and those.
"

# Write the content to the file
echo "$content" > "$file_name"

# Print a message indicating the file has been created
echo "File ${file_name} has been created with the specified content."
