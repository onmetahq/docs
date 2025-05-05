Steps to build the project
1. Clone the repository
2. make necessary changes 
3. to run locally 
   - ```npm run serve  -> localhost:8080 ```
    or 
   - ```redocly preview-docs openapi.yaml ```
4. to build for production
   - ```redocly bundle openapi.yaml --output docs/dist.json```
5. Push the changes to the repository
   GitHub Actions will automatically deploy the changes to GitHub Pages
6. To view the documentation, go to [https://onmetahq.github.io/docs](https://onmetahq.github.io/docs)