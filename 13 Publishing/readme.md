# Docker

## Install Docker with Linux Containers (... on Windows Server 2016 / 2019)

```auto
Install-WindowsFeature -Name Hyper-V -ComputerName <computer_name> -IncludeManagementTools -Restart

Install-Module DockerProvider -Force

Install-Package Docker -ProviderName DockerProvider -RequiredVersion preview
```

## Switch to Linux Containers

```auto
[Environment]::SetEnvironmentVariable("LCOW_SUPPORTED", "1", "Machine")

Restart-Service docker
```

## Switch to Windows Containers

```auto
[Environment]::SetEnvironmentVariable("LCOW_SUPPORTED", $null, "Machine")

Restart-Service docker
```

## Test Windows Containers

docker container run hello-world:nanoserver

## Build and run the Application with Docker for Linux containers

docker build -t voucherapp .

docker run -it --rm -p 8000:80 --name aspnetcore_sample aspnetapp

## Readings

[Hot to run Linux Containers on 2019 Server](https://www.altaro.com/msp-dojo/linux-containers-windows-server-2019/)

[How to run Windows Server Hyper-V on VMware Workstation](https://www.sqlskills.com/blogs/tim/how-to-run-windows-server-2012-hyper-v-on-vmware-workstation/)
