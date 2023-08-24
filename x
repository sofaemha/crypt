#!/bin/bash

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  echo "Currently not supported on Linux GNU"
elif [[ "$OSTYPE" == "darwin"* ]]; then
  echo "Currently not supported on Mac OSX"
elif [[ "$OSTYPE" == "cygwin" ]]; then
  echo "Currently not supported on POSIX"
elif [[ "$OSTYPE" == "msys" ]]; then
  if ! [ -x "$(command -v clear)" ]; then
    clear="cls"
  else
    clear="clear"
  fi
  while [ True ]; do
    if [ "$1" = "--run" -o "$1" = "-r" ]; then
      # clear
      # echo "OS type lightweight shell and GNU utilities compiled for Windows (part of MinGW)"
      # read -p "Press any key to continue... (or CTRL+C to exit)" -n1 -s
      eval $clear
      echo -e "\033[0;32mRunning localhost:3000 in default browser...\033[0m"
      explorer "http://localhost:3000/"
      echo -e "\033[0;32mRunning NPM scripts...\033[0m"
      npm run dev
    elif [ "$1" = "--github" -o "$1" = "-gh" ]; then
      # clear
      # echo "OS type lightweight shell and GNU utilities compiled for Windows (part of MinGW)"
      # read -p "Press any key to continue... (or CTRL+C to exit)" -n1 -s
      eval $clear
      echo -e "\033[0;32mRunning github command line...\033[0m"
      if [ "$2" = "--init" -o "$2" = "-i" ]; then
        echo -e "\033[0;32mGitHub initialization...\033[0m"
        echo "GitHub repository HTTPS/SSH :"
        read repo
        if [ -z "$repo" ]; then
          echo "error: GitHub repository cannot be empty"
        else
          echo "GitHub branch name :"
          read branch
          if [ -z "$branch" ]; then
            echo "error: GitHub branch name cannot be empty"
          else
            git init
            git branch -M "$branch"
            git remote add origin "$repo"
            echo -e "\033[0;32mSuccessfully initialized the github repository...\033[0m"
            break
          fi
        fi
      elif [ "$2" = "--update" -o "$2" = "-u" ]; then
        echo -e "\033[0;32mGitHub updating repository...\033[0m"
        echo "GitHub commit message :"
        read message
        if [ -z "$message" ]; then
          echo "error: GitHub commit message cannot be empty"
        else
          echo "GitHub branch name :"
          read branch
          if [ -z "$branch" ]; then
            echo "error: GitHub branch name cannot be empty"
          else
            echo -e "\033[0;32mAdding all file into commit...\033[0m"
            git add *
            git commit -m "$message"
            git branch -M "$branch"
            git push -u origin "$branch"
            echo -e "\033[0;32mSuccessfully updated github repository...\033[0m"
            break
          fi
        fi
      else
        echo "error: argument not found"
      fi
    else
      eval $clear
      echo -e "\nShortcut custom command for project development.\n"
      echo -e "sh x [command:][child]\n"
      echo -e "\t [] \t\t Provides Help information for Windows commands."
      echo -e "\t [-r] \t\t Running localhost in default browser."
      echo -e "\t [-gh] [-i] \t GitHub repository initialization."
      echo -e "\t [-gh] [-u] \t GitHub updating repository."
      break
    fi
  done
elif [[ "$OSTYPE" == "win32" ]]; then
  echo "I'm not sure this can happen... so currently not supported."
elif [[ "$OSTYPE" == "freebsd"* ]]; then
  echo "Currently not supported on FreeBSD"
else
  echo "Does not recognize the Operating System."
fi