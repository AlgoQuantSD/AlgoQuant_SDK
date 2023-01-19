# AlgoQuant_SDK

Node.js SDK for the project AlgoQuant at UCF for Senior Design 2022-23. Currently implemented for internal use only. This SDK contains all the API network request for the endpoints that will be used on the Algoquant Web and Mobile applications. Endpoint logic can be found here on our [Algoquant_Backend repo](https://github.com/AlgoQuantSD/AlgoQuant_Backend).

## Installation

Use the package manager [npm](https://github.com/nvm-sh/nvm) through Node Version Manager to install AlgoQuant.

```bash
npm install algoquant
```

## Usage

```javascript
import Algoquant from "Algoquant";

# returns 'user object'
Algoquant.GetUser(token)
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## NPM Link

[NPM package](https://www.npmjs.com/package/algoquant)
