
# keytrove 😎

A cli package which is used to store key value pairs and images correspondence key name on Cloud . And these key value pairs and images key can be accessed by simply sigined in any devices .

![GitHub package.json version](https://img.shields.io/github/package-json/v/theninza/imcrypt?style=for-the-badge)

![GitHub Repo stars](https://img.shields.io/github/stars/theninza/imcrypt?logo=github&style=for-the-badge)






## Tech Stack

`Node`, `Express` , `Mongoose` , `Redis`


# Installation

1. First install keytrove package globally in your system .
```bash
npm install -g keytrove
```
2. Now for interacting with this package run help command .
```bash
keytrove help
```

### `Screenshot`

![Screenshot](https://drive.google.com/file/d/1FSrxcbqTko6M8dUsvnzrUYyHfHUZWUgg/view?usp=share_link)

```sh
Options :
   1. -v , --version   Display Current version
   2. h , help   For help
   3. signup   For Signup
   4. signin   For SignIn
   5. signout   For Signing Out

Commands :
   1. keytrove set           , keytrove s                    For Setting any Key
   2. keytrove get <key_Name>, keytrove g <key_name>      For Getting any Specific key
   3. keytrove update <keyname>   , keytrove u <keyname>            For Updating Any Key
   4. keytrove remove <keyname>   , keytrove r <keyname>            For Removing Any Key
   5. keytrove img-Upload    , keytrove k             For Uploading Any Image
   6. keytrove img-Get <key>    , keytrove g <key>             For Getting Any Image correspondence Name
   7. keytrove img-GetAll    , keytrove l             For Getting All Uploaded Images
   8. keytrove img-Delete <qkey>    , keytrove l <qkey>             For deleting any Image Correspondence  Image name

Password Requirements :
    Password Must Has  Atleast 6 Character
```

3. After this to signup for creating an account or if you already signuped then signin using your credentials . 
```bash
 keytrove signup
 keytrove signin
```


## Features

### options
```bash
   1. -v , --version   Display Current version
   2. h , help   For help
   3. signup   For Signup
   4. signin   For SignIn
   5. signout   For Signing Out
```

### Alias
```bash
   s , set        for setting key value 
   g , get        for getting key value
   r , remove     for removing key value 
   k , img-Upload for uploading image 
   l , img-GetAll for getting all images keys 
```

### Commands


| Command   | Description |
| ------ | ----------- |
| keytrove set   | For Setting any Key value pair |
| keytrove get key_Name | For Getting any Specific key. |
| keytrove update key_Name    |  For Updating Any Key value . |
| keytrove remove key_Name   |  To delete Key value pair .|
| keytrove img-Upload | For Uploading Any Image |
| keytrove img-Get image_key  |  For Getting Any Image correspondence Name |
| keytrove img-GetAll   | For Getting All Image-key Name |
| keytrove img-Delete image_key | For deleting any Image Correspondence  Image key. |





# Limitations  😢

**For uploading any image You have to Use url of image as path of image . Image should be uploaded on Online cloud storage**
## Authors   😎😉

- [@adityajainakj123](https://github.com/adityajainakj123)   


- [@ajay2827](https://github.com/ajay2827)
- [@navvvgupta](https://github.com/navvvgupta)






