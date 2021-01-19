# Jim Miller's Dotfiles

So, to recap, the install script will:

- back up any existing dotfiles in your home directory to `~/dotfiles_old/`
- create symlinks to the dotfiles in `~/dotfiles/` in your home directory
- clone the `oh-my-zsh` repository from my GitHub (for use with `zsh`)
- check to see if `zsh` is installed, if it isn't, try to install it
- if zsh is installed, run a `chsh -s` to set it as the default shell

## Features

- Handy [binary scripts](bin/)
- [Stop words](dict/) lists that I use with Marked 2
- Git aliases
- zsh aliases
- Custom zsh theme with Git and battery status, etc: [nicktheme](zsh/themes/nick.zsh-theme)
- Sensible [OS X defaults](osx/set-defaults.sh)
- [Install script](setup.sh)

## Installation

```sh
$ git clone https://github.com/jim-miller/dotfiles.git ~/dotfiles
$ cd ~/dotfiles
$ chmod +x setup.sh
$ ./setup.sh
```

## Remotely install using curl

Alternatively, you can install this into `~/dotfiles` remotely without Git using curl:

```sh
sh -c "`curl -fsSL https://raw.github.com/jim-miller/dotfiles/master/remote-setup.sh`"
```

Or, using wget:

```sh
sh -c "`wget -O - --no-check-certificate https://raw.githubusercontent.com/jim-miller/dotfiles/master/remote-setup.sh`"
```

## Customize

### Local Settings

The dotfiles can be easily extended to suit additional local
requirements by using the following files:

#### `~/.zsh.local`

If the `~/.zsh.local` file exists, it will be automatically sourced
after all the other [shell related files](shell), thus, allowing its
content to add to or overwrite the existing aliases, settings, PATH,
etc.

#### `~/.gitconfig.local`

If the `~/.gitconfig.local` file exists, it will be automatically
included after the configurations from [`~/.gitconfig`](git/gitconfig), thus, allowing
its content to overwrite or add to the existing `git` configurations.

**Note:** Use `~/.gitconfig.local` to store sensitive information such
as the `git` user credentials, e.g.:

```sh
[user]
  name = John Doe
  email = john.doe@example.com
```

## Resources

I actively watch the following repositories and add the best changes to this repository:

- [GitHub ❤ ~/](http://dotfiles.github.com/)

## License

The code is available under the [MIT license](LICENSE).
