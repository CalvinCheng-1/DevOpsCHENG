DevOps test deployment

Live endpoint available at: https://myhello-tmxjoggrea-uc.a.run.app/

The development is to create a API services for clients.

Github workflow : Triggers the build and deployment process to Google Cloud Run.

        Upon commit received in main branch:

        1.       Automate building a Docker image,

        2.       Publishing it to Google Cloud Container Registry

        3.       Deploying it to API to Cloud Run.

        The work flow includes error handling and sending workflow notification via email with detail on the repository and the commit description.

    Workflow Steps

        1.       Checkout Â– Extract the repositiory

        2.       Setup gcloud CLI Â Connect to Google Cloud SDK CLI with credential

        3.       Configure Docker Â– Configure Docker with CLI

        4.       Build & Publish Â– Build and publish th Docker to Google Cloud project

        5.       Deploy - Deploys the Docker to Google Cloud Run (Project : myHello)

        Handle Error Â– Trigger Fa ilure email notification with detail via IFTTTT

        Final Step - Trigger Success email notification with detail via IFTTTT

Application Node.js API
    GET /

        Description
        Returns a message on API

Client A : Inventory stall

    GET /stall

        Description
        Returns a message on API

    GET /stall/inventory?invcode={invcode}

        Description
        Retrieves the inventory count based on the provided invcode.

        Parameters
        Invcode (string)

        Response:
        Json {Â  "invco de": {invcode} , "count": {result) }


Client B : Financial information (Yahoo Financial)

    GET /yf

        Description
        Returns a message on API

    GET /yf/stock?symbol={symbol}

        Description
        stock price for the provided symbol.

        Parameters
        symbol (string)

        Response:
        Json {Â  " symbol": { symbol } , " price": {result) }

    

 