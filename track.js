let stats={
  total:0,
  errors:0,
  data:0,
  times:[],
  connections:0,
  last:{},
  rpsQueue:[],
  rpmQueue:[]
};

export default function handler(req,res){
  const now=Date.now();
  stats.total++;
  stats.connections++;

  const status=Math.random()>0.95?500:200;
  if(status>=400) stats.errors++;

  const time=Math.random()*200;
  stats.times.push(time);
  stats.data += Math.random()*0.05;
  stats.last={method:req.method,status,time:Math.round(time)};

  stats.rpsQueue.push(now);
  stats.rpmQueue.push(now);

  stats.rpsQueue = stats.rpsQueue.filter(ts=> now-ts <= 1000);
  stats.rpmQueue = stats.rpmQueue.filter(ts=> now-ts <= 60000);

  const rps=stats.rpsQueue.length;
  const rpm=stats.rpmQueue.length;

  const avg=stats.times.reduce((a,b)=>a+b,0)/stats.times.length;

  res.setHeader("Access-Control-Allow-Origin","*");
  res.json({
    total:stats.total,
    rps,
    rpm,
    data:stats.data.toFixed(2),
    error:((stats.errors/stats.total)*100).toFixed(2),
    avg:avg.toFixed(2),
    connections:stats.connections,
    last:stats.last
  });

  stats.connections--;
}

