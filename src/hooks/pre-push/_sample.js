/**
 * Called when the developer try to push
 * @param {string} remote - remote name (ex: origin)
 * @param {string} url - url repository
 * @param {object} s - status /src/status
 * @return {msg} the updated message.
 */
module.exports = function(remote, url, s) {
  // PROCESS

  s.success('Write a success message in green');
  s.warn('Write a success message in yellow and continue hook process');
  s.error('Write a error message in red and stop the hook process');
};
