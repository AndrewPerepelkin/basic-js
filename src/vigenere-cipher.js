import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(mod) {
    if (typeof mod === 'boolean') {
      this.reverce = mod;
    } else {
      this.reverce = true;
    }
  }

  encrypt(message, key) {

    if (!(message && key)) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let keyRep = key;
    if (message.length > key.length) {
      const n = Math.ceil(message.length / key.length)
      keyRep = key.repeat(n);
    }

    const k = keyRep.toUpperCase().split('');
    let countNotChar = 0;
    const result = message.toUpperCase().split('').map((char, i, message) => {
      let chari = alphabet.indexOf(char);
      if (chari === -1) {
        countNotChar += 1;
        return message[i] = char;
      } else {
        let keyi = alphabet.indexOf(k[i - countNotChar]);

        if ((chari + keyi) <= alphabet.length - 1) {
          return message[i] = alphabet[chari + keyi];
        } else {
          return message[i] = alphabet[(chari + keyi) - alphabet.length];
        }
      }
    });

    if (!this.reverce) {
      return result.reverse().join('');
    } else {
      return result.join('');
    }
  }


  decrypt(encryptedMessage, key) {
    if (!(encryptedMessage && key)) {
      throw new Error('Incorrect arguments!');
    }
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let keyRep = key;
    if (encryptedMessage.length > key.length) {
      let n = Math.ceil(encryptedMessage.length / key.length)
      keyRep = key.repeat(n);
    }

    const k = keyRep.toUpperCase().split('');
    let countNotChar = 0;
    let result = encryptedMessage.toUpperCase().split('').map((char, i, encryptedMessage) => {
      let chari = alphabet.indexOf(char);
      if (chari === -1) {
        countNotChar += 1;
        return encryptedMessage[i] = char;
      } else {
        let keyi = alphabet.indexOf(k[i - countNotChar]);

        if ((chari - keyi) >= 0) {
          return encryptedMessage[i] = alphabet[chari - keyi];
        } else {
          return encryptedMessage[i] = alphabet[(chari - keyi + alphabet.length)];
        }
      }
    });

    if (!this.reverce) {
      return result.reverse().join('');
    } else {
      return result.join('');
    }
  }
}
