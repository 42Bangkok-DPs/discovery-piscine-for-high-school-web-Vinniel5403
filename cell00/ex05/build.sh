#!/bin/bash

# Check if no arguments are provided
if [ "$#" -eq 0 ]; then
  echo "No arguments supplied"
else
  # Loop through all arguments
  for arg in "$@"; do
    dir_name="ex$arg"
    # Create directory if it doesn't exist
    if [ ! -d "$dir_name" ]; then
      mkdir "$dir_name"
    fi
  done
fi
