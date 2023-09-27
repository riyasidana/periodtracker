# Cluster config

## YAML files

First, create your own .k8s module, [go here](../modules.md) for an explanation of git submodules. Use the [whitelabelled](https://github.com/Oky-period-tracker/periodtracker_k8s-whitelabelled) k8s repo as a template for your own.

Go [here](../setup.md#firebase) to see how to set up the firebase yaml file

Edit your `api-ingress.yaml` and `cms-ingress.yaml` files so that the host is correct. Simply replace the `example.com` with your domain name.

Next edit your `cms.yaml` file

`DATABASE_HOST` should be the IP address of the database droplet you created earlier. You can find this IP address in the Digital Ocean dashboard. Make sure that `DATABASE_NAME` & `DATABASE_SCHEMA` are the same as what you created in the database droplet.

Next edit the `api.yaml` file, the changes here will be similar to the `cms.yaml` file. This file also requires a value for `DELETE_ACCOUNT_URL`, if you have not set up the `delete-account` website yet don't worry, you can do this later, but I recommend putting in a value for this URL anyway, so that you don't need to come back and edit this again after setting that up. eg `delete-account.yourdomain.com`

---

## Secrets

Next add the `postgres-credentials` using this command, again make sure that these match the credentials you used earlier when creating the droplet.

```bash
kubectl create secret generic postgres-credentials --from-literal=user=<YOUR_DATABASE_USERNAME> --from-literal=password=<YOUR_DATABASE_PASSWORD>
```

Do the same for the passport secret

```bash
kubectl create secret generic passport --from-literal=secret=<YOUR_PASSPORT_SECRET>
```

You can check what secrets you have by running this command

```bash
kubectl get secrets
```

Make sure that the container image URL is correct, this should be the same as the one you pushed earlier. eg `registry.digitalocean.com/periodtracker/api:v1`

---

Create config map for CMS firebase

```bash
kubectl create configmap firebase-config --from-file=firebase.conf=./packages/cms/firebase-config.json --namespace=default
```
