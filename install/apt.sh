#!/bin/bash

# Installs Homebrew and some of the common dependencies needed/desired for software development

# Ask for the administrator password upfront
sudo -v

sudo apt update
sudo apt -y upgrade

apps=(
    curl
    zsh-autosuggestions
    git
    nodejs
    npm
    fzf
    ripgrep
    jq
    tmux
)

sudo apt -y install "${apps[@]}"

