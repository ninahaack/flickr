# flickr

## Running with docker

### build the Docker image
```
docker build -t flickr-app .
```

### build the Docker image
```
docker run -it -p 8080:8080 --rm flickr-app
```


## Running without docker

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```