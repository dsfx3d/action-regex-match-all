# Action to Extract Unique Matches from a String

## Description

This GitHub Action extracts all unique matches from a given string based on a specified regular expression and returns an array of all unique matches or an empty array if no matches are found.

## Inputs

| Name      | Description                      | Required | Default |
|-----------|----------------------------------|----------|---------|
| `regex`   | The regex to match               | ✅       |         |
| `input`   | The string to match against      | ✅       |         |
| `flags`   | The flags to use for the regex   | ❌       | `gi`    |

## Outputs

| Name      | Description                                        |
|-----------|----------------------------------------------------|
| `matches` | An array of all unique matches or an empty array   |

## Example Usage

```yaml
name: Extract Unique Matches
on:
  push:
    branches:
      - main

jobs:
  extract-matches:
    runs-on: ubuntu-latest
    steps:
    - name: Run Action to Extract Unique Matches
      id: match
      uses: dsfx3d/action-extract-unique-matches@v1
      with:
        regex: '[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9_-]+'
        input: ${{ github.event.issue.body }}

    - run: |
      echo "Unique email addresses in issue body: ${{ steps.match.outputs.matches }}"
```
