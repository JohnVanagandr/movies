const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTkzODQzMjU2YjliODM0Yjk3MmIwNjRmY2NmZTFkNyIsIm5iZiI6MTczMjczODE4Ny43NjM0MDA4LCJzdWIiOiI2NzQ3Nzc5ZTMzMzhkZmM5Mjg0NGQyNmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vnkqkSVcnBPTUCNtKOQYCDlm2SLHcoLU143haB_7Jgs'
  }
};

fetch('https://api.themoviedb.org/3/company/company_id/images', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));