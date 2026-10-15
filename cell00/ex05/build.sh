#!/bin/bash

# Check if at least one argument was provided
if [ "$#" -eq 0 ]; then
    echo "Usage: $0 folder1 folder2 folder3..."
    exit 1
fi

# Loop through all arguments passed to the script
for folder in "$@"; do
    folder_name="ex${folder}"
    mkdir -p "$folder_name"
    echo "Created directory: $folder_name"
done