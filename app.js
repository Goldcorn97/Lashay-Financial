const topics={medicare:{title:'Start with the care you rely on.',items:['Are my doctors, hospitals, prescriptions, and pharmacies covered?','What premiums and out-of-pocket costs should I compare?','Which enrollment period applies to my situation?'],detail:'Start by learning about Original Medicare, Medicare Advantage, prescription drug coverage, and Medicare Supplement Insurance. Availability, costs, and enrollment rules vary. Verify the details of any plan before enrolling. This is an educational overview, not a plan recommendation.'},family:{title:'Think about the people you love.',items:['Who depends on me, and would they need help with the mortgage or other bills?','How do term, permanent, and final expense options differ?','What are the premiums, exclusions, and any waiting periods?'],detail:'Life insurance generally pays a death benefit to named beneficiaries when a covered insured person dies. Term and permanent policies have different features and conditions. Final expense insurance is generally intended to help with funeral and other end-of-life costs. Ask about costs, exclusions, and waiting periods.'},retirement:{title:'Let’s start with your retirement questions.',items:['What income and expenses do I expect in retirement?','How much flexibility and access to my savings do I need?','If I consider an annuity, what fees, restrictions, risks, and guarantees apply?'],detail:'Retirement income planning starts with your goals, expected expenses, and existing resources. Annuities are insurance contracts that may provide income now or later, depending on their terms. Review costs, surrender charges, liquidity restrictions, and risks. Guarantees depend on the issuing insurer’s claims-paying ability. This is general education, not personalized investment or tax advice.'}};
(function(){
 const result=document.getElementById('guide-result');
 if(!result)return;
 const download=document.getElementById('download');
 let downloadUrl;
 function render(key){
  const t=topics[key];if(!t)return;
  result.textContent='';
  const h=document.createElement('h3');h.textContent=t.title;
  const ul=document.createElement('ul');
  t.items.forEach(s=>{const li=document.createElement('li');li.textContent=s;ul.appendChild(li)});
  result.appendChild(h);result.appendChild(ul);
  document.querySelectorAll('[data-guide]').forEach(b=>{const on=b.dataset.guide===key;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});
  if(download && typeof Blob!=='undefined' && URL.createObjectURL){
   if(downloadUrl)URL.revokeObjectURL(downloadUrl);
   const text='LASHAY FINANCIAL AGENCY\nMy insurance conversation questions\n\n'+t.title+'\n\n'+t.items.map((s,i)=>(i+1)+'. '+s).join('\n\n')+'\n\nMy notes:\n\n\nEducational information only. This is not a quote or policy recommendation.\n';
   downloadUrl=URL.createObjectURL(new Blob([text],{type:'text/plain'}));download.href=downloadUrl;
  }
 }
 document.querySelectorAll('[data-guide]').forEach(b=>b.addEventListener('click',()=>render(b.dataset.guide)));
 render('medicare');
})();
