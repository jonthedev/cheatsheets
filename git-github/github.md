# GITHUB

---

# Check for existing SSH Keys

```terminal
ls -al ~/.ssh
```

# Add Identity without Keychain

```terminal
ssh-add ~/.ssh/id_rsa
```

# Copy ssh key

```terminal
pbcopy < ~/.ssh/id_ed25519.pub
```

# Check known hosts

```terminal
$ ssh-keygen -l -f ~/.ssh/known_hosts
```

# Add collobrator

1. Click on the Settings tab in the right corner of the GitHub page.
2. Manage Access option under the Settings tab. On the Manage Access page, you will see an Invite collaborator link
3. You can Invite collaborators by any of the following options.
   1. Username
   2. Full Name
   3. Email
