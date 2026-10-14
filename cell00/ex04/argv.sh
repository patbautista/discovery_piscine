#!/bin/bash

# Check if no arguments were provided
if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
    exit 0
fi

count=0

# Loop through all arguments provided
for arg in "$@"; do
    echo "$arg"
    count=$((count + 1))
    
    # Stop after printing 3 arguments
    if [ "$count" -eq 3 ]; then
        break
    fi
done