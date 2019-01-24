# FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
# WORKDIR /app
# EXPOSE 49856
# EXPOSE 44360

# FROM microsoft/dotnet:2.2-sdk AS builder
# WORKDIR /src
# COPY ./VouchersAPI.csproj VouchersAPI/VouchersAPI.csproj
# RUN dotnet restore VouchersAPI/VouchersAPI.csproj

# COPY . .
# WORKDIR /VouchersAPI
# RUN dotnet build ./VouchersAPI.csproj -c Release -o /app

# COPY . .
# FROM builder AS publish
# RUN dotnet publish -c Release -o /app

# FROM base AS final
# WORKDIR /app
# COPY --from=publish /app .
# ENTRYPOINT ["dotnet", "Vouchers.dll"]


FROM microsoft/dotnet:2.2-sdk
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# copy and build everything else
COPY . ./
RUN dotnet publish -c Release -o out
ENTRYPOINT ["dotnet", "out/Vouchers.dll"]