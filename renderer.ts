import { versions } from 'node:process';


const information = document.getElementById("info")!;
information.innerText = `This app is using chrome: v${versions.chrome}, electron: v${versions.electron}, node: v${versions.node}`;