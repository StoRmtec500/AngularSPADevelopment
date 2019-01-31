# Docker

## Installation

### Install Docker with Linux Containers on Windows Server 2019

```auto
Install-WindowsFeature -Name Hyper-V -ComputerName <computer_name> -IncludeManagementTools -Restart

Install-Module DockerProvider -Force

Install-Package Docker -ProviderName DockerProvider -RequiredVersion preview
```

#### Switch to Linux Containers

```auto
[Environment]::SetEnvironmentVariable("LCOW_SUPPORTED", "1", "Machine")

Restart-Service docker
```

#### Switch to Windows Containers

```auto
[Environment]::SetEnvironmentVariable("LCOW_SUPPORTED", $null, "Machine")

Restart-Service docker
```

#### Test Windows Containers

docker container run hello-world:nanoserver

### Install Docker on Windows 10

#### VM-Ware Compatibility on Windows

Switch Windows Boot Config using BCDEdit to support Hyper-V or VM-Ware

Enable VM-Ware: `bcdedit /set hypervisorlaunchtype off`

Disable VM-Ware: `bcdedit /set hypervisorlaunchtype auto`

### Change Location of Docker files

Stop Docker Service: `stop-service docker`

Open `C:\ProgramData\Docker\config\daemon.json`

Edit `daemon.json`

`{ "data-root": "F:\\DockerData" }`

Start Docker Service: `start-service docker`

## Docker Basic Commands

### Download an Image

`docker pull microsoft/mssql-server-linux:latest`

### Base Switches

Detached: `-d`

Cleanup: `--rm`

Connect a pseudo Console - (Interactive): `-it`

### Run a named Image: ie SQL for Linux

`docker run -d --name sqllinux -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=TiTp4SQL@dmin' microsoft/mssql-server-linux:latest`

### Build and run the Application: ie .NET Core Web Api

Specify Dockerfile for Build: -f ... Dockerfile | prod.dockerfile

Adjust Connection String:

`"DockerConnection": "Data Source=sqllinux;Initial Catalog=VoucherDockerDB;;User ID=sa;Password=TiTp4SQL@dmin"`

Prefexing prod keeps Intellisense in file

`docker build --rm -f "Dockerfile" -t vouchersapi:latest .`

`docker run -d --rm -p 8080:8080 --link sqllinux:sqllinux vouchersapi:latest`

### Check NGINX image

docker build -t vouchersui:1.0.0 -f dockerfile .

docker run -d -p 8080:80/tcp vouchersui

Check `http://localhost:8080` for result

### Build Angular Frontend

Create a Production Build:

`ng build --prod`

Keep "dist"-folder when building:

`ng build --watch --delete-output-path false`

Build angular-nginx:

`docker build -t --rm vouchersui -f dockerfile .`

Run angular on nginx:

Use on Windows Host

`docker run -p 8080:80 -d -v ./dist/vouchersui:/usr/share/nginx/html vouchersui`

Use on Linux Host

`docker run -p 8080:80 -d -v $(pwd)/dist/vouchersui:/usr/share/nginx/html vouchersui`

## Using Docker Compose

[Docker Compose Cheatsheet](https://devhints.io/docker-compose)

Build your Network:

`docker-compose build`

Run Network

`docker-compose up`
