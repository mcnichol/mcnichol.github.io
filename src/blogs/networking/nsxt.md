# PKS with NSX-T

* Managed K8s for **Multiple Clusters**
* Targetted towards Day 2
* Uses BOSH under the hood

PKS | K8s | K8s
    BOSH
Infrastructure

Deploys as a tile in OpsMan
`pks create-cluster cluster-name`
`pks get-credentials cluster-name`
`kubectl get pods`

You have a cluster

## Networking
* CNI (Container Networking Interface) - Choose your own adventer (Silk, Flannel, NSX-T, ACI)
* Flannel is base for pod communication
* Need ingress and LB for ingress traffic
* NetworkPolicy for enforcing network rules
  * Not provided by Flannel alone

NSX-T runs on a variety of platforms
* Address all K8s Networking Functions (Load Balancing, IPAM, Routing , Firewalling)
* Complete automation and dynamic provisioning of Network Objects required for K8s and workloads
* Support for different topology choics for Pod and Node Networks (NAT/No-NAT)
* Network Security Policies for K8s Clusters, Namespaces, Individual Services
* Full network traceability/visibility using NSX-T inbuilt operational tools for K8s

Automation (REST API support)
Operations (Getting Started Wizards, Dashboards, Granular RBAC, VREALIZE LOG INSIGHT / Splunk plugins)
Troubleshooting (Traceflow)

NSX-T alongside PKS

Show Upgrade Process
* NCP
