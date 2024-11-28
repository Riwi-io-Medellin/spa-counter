# <div align="center">SPA Contador
</div>

<div align="center"><img src="https://graingermx.vtexassets.com/arquivos/ids/859846/2PAU5_AS01.jpg?v=637722164078900000" alt="Image Description" width="300"></div>

A simple **Single Page Application (SPA)** built with **Vite** and **Docker**. This project demonstrates how to create a modern web application and deploy it using Docker and serve it with Nginx.

## Features

- **Built with Vite**: A fast and optimized build tool for modern web applications.
- **Dockerized**: The application is containerized using Docker for easy deployment.
- **Nginx**: Served using Nginx as a lightweight web server.
  
## Getting Started

Follow these steps to get a local copy up and running on your machine.

### Prerequisites

Make sure you have the following installed on your machine:
- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (for development)
## How to Use

1. **Clone the repository:**
```bash
git clone https://github.com/Riwi-io-Medellin/spa-counter.git
```
Clone the repository, preferably using the SSH security key or you can also use the HTTPS method.
<p align="center"><img src="https://happygitwithr.com/img/github-https-or-ssh-url-annotated.png" width="600" alt="ejemplo"></p>

2. **Navigate to the Project Directory:**
```bash
cd spa-counter
```

3. **Build the Docker image:**
```bash
docker build -t spa-contador:v1.0 .
```

4. **Run the container:**
```bash
docker run -p 2323:80 --name spa-contador-container spa-contador:v1.0
```

Visit your application at http://localhost:2323 in your browser.

## Contributing

Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue or submit a pull request to the branch ```develop```

## License

© 2024 Riwi. All rights reserved.

The content of this project, including but not limited to text, images, graphics, and code, is the property of Riwi and is protected by copyright laws. It may not be reproduced, distributed, modified, or transmitted in any form or by any means without the prior written permission of Riwi.

For inquiries regarding the use or distribution of this project, please contact Riwi at [formacion@riwi.com](mailto:formacion@riwi.com).
