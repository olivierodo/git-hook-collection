/**
 * Called with the message written by the developer
 * @param {string} msg - developer message
 * @param {object} s - status /src/status
 * @return {msg} the updated message.
 */

module.exports = function(msg, s) {
  // PROCESS

  s.success('Write a success message in green');
  s.warn('Write a success message in yellow and continue hook process');
  s.error('Write a error message in red and stop the hook process');

  return msg; // Return your updated message
};
