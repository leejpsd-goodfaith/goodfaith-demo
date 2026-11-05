# goodfaith-demo

This is a demo repository for [Goodfaith](https://goodfaith.onrender.com), not a real project. Its pull requests exercise the gate on a real GitHub repository. All money involved is PayPal sandbox money.

The code is a small slug function, so a pull request has something to change. It is fast, modern and scalable.

```js
import { slug } from './src/slug.js';

slug('Hello, World!'); // 'hello-world'
```

Run the tests with `npm test`.

`.github/goodfaith.json` holds this project's hold bounds, appeal window and payout receiver. The appeal window is one day here so the demo can show a capture, where a real project would allow longer. The receiver is a PayPal sandbox test account.

## License

MIT
