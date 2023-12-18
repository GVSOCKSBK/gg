import ipaddress

# Replace these values with your actual IP address and subnet mask
ip_address = "192.168.1.100"
subnet_mask = "255.255.255.0"

# Create an IPv4 network object
network = ipaddress.IPv4Network(f"{ip_address}/{subnet_mask}", strict=False)

# Display network details
print(f"IP Address: {ip_address}")
print(f"Subnet Mask: {subnet_mask}")
print(f"Network Address: {network.network_address}")
print(f"Maximum Number of Hosts: {network.num_addresses - 2}")
print(f"IP Address Range: {network.network_address + 1} - {network.broadcast_address - 1}")