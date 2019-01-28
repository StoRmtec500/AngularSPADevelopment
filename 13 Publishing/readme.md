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

`docker run -d --name sql -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Pa$$w0rd' microsoft/mssql-server-linux:latest`

### Build and run the Application: ie .NET Core Web Api

Specify Dockerfile for Build: -f ... Dockerfile | prod.dockerfile

Adjust Connection String:

`"DockerConnection": "Data Source=sql;Initial Catalog=VoucherDockerDB;;User ID=sa;Password=Pa$$w0rd"`

Prefexing prod keeps Intellisense in file

`docker build --rm -f "Dockerfile" -t vouchersapi:latest .`

`docker run -d --rm -it -p 8080:8080 --link sql:sql vouchersapi:latest`

### Build Angular Frontend

Set Environment:

Create a Production Build:

`ng build --prod`

## Using Docker Compose

Build your Network:

`docker-compose build`

Run Network

`docker-compose up`
