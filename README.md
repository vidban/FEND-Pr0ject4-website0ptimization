
#### Part 1: Optimize PageSpeed Insights score for index.html

1. Check out the repository
1. To inspect the site, run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make the local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights!

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, modify views/js/main.js until the frames per second rate is 60 fps or higher.
