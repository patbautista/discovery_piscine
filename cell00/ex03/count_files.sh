echo "Files: $(find . -maxdepth 1 -type f ! -name . -printf '.' | wc -c)"
echo "Directories: $(find . -maxdepth 1 -type d ! -name . -printf '.' | wc -c)"
