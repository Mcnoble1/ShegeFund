// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    creator: ctc1,
    deadline: ctc2,
    story: ctc1,
    target: ctc2,
    title: ctc1
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    None: ctc5,
    Some: ctc2
    });
  const map0_ctc = ctc6;
  
  
  const Info_details = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v328, v329, v330, v333, v334, v345, v346, v347, v351] = svs;
      return (await ((async () => {
        
        
        return v330;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        details: {
          decode: Info_details,
          dom: [],
          rng: ctc3
          }
        }
      },
    views: {
      3: [ctc0, ctc0, ctc3, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function _Donor_donate3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Donor_donate3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Donor_donate3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc5 = stdlib.T_Object({
    creator: ctc4,
    deadline: ctc1,
    story: ctc4,
    target: ctc1,
    title: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v328, v329, v330, v333, v334, v345, v346, v347, v351] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1]);
  const v357 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)', 'at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)'],
    msg: 'in',
    who: 'Donor_donate'
    });
  const v358 = v357[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v362 = v345 ? false : true;
  stdlib.assert(v362, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:68:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)', 'at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)'],
    msg: 'Fundraising started',
    who: 'Donor_donate'
    });
  const v364 = stdlib.gt(v358, stdlib.checkedBigNumberify('./index.rsh:69:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v364, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:69:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)', 'at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)'],
    msg: 'Must donate more than 0',
    who: 'Donor_donate'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v328, v329, v330, v333, v334, v345, v346, v347, v351, v357],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v358, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v377], secs: v379, time: v378, didSend: v235, from: v376 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Donor_donate"
        });
      const v381 = v377[stdlib.checkedBigNumberify('./index.rsh:66:14:spread', stdlib.UInt_max, '0')];
      const v382 = stdlib.safeMul(v381, stdlib.checkedBigNumberify('./index.rsh:67:39:decimal', stdlib.UInt_max, '5'));
      const v383 = stdlib.safeDiv(v382, stdlib.checkedBigNumberify('./index.rsh:67:41:decimal', stdlib.UInt_max, '100'));
      const v389 = stdlib.add(v351, v381);
      sim_r.txns.push({
        amt: v381,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 0, v376, v381);
      const v400 = null;
      const v401 = await txn1.getOutput('Donor_donate', 'v400', ctc0, v400);
      
      const v412 = stdlib.sub(v389, v383);
      sim_r.txns.push({
        kind: 'from',
        to: v329,
        tok: undefined /* Nothing */
        });
      const v413 = stdlib.safeAdd(v347, v381);
      const v414 = stdlib.safeAdd(v346, stdlib.checkedBigNumberify('./index.rsh:77:65:decimal', stdlib.UInt_max, '1'));
      const v478 = false;
      const v479 = v414;
      const v480 = v413;
      const v482 = v412;
      const v483 = stdlib.lt(v413, v333);
      if (v483) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v328,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v377], secs: v379, time: v378, didSend: v235, from: v376 } = txn1;
  undefined /* setApiDetails */;
  const v381 = v377[stdlib.checkedBigNumberify('./index.rsh:66:14:spread', stdlib.UInt_max, '0')];
  const v382 = stdlib.safeMul(v381, stdlib.checkedBigNumberify('./index.rsh:67:39:decimal', stdlib.UInt_max, '5'));
  const v383 = stdlib.safeDiv(v382, stdlib.checkedBigNumberify('./index.rsh:67:41:decimal', stdlib.UInt_max, '100'));
  const v384 = v345 ? false : true;
  stdlib.assert(v384, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:68:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)', 'at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)'],
    msg: 'Fundraising started',
    who: 'Donor_donate'
    });
  const v386 = stdlib.gt(v381, stdlib.checkedBigNumberify('./index.rsh:69:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v386, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:69:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)', 'at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)'],
    msg: 'Must donate more than 0',
    who: 'Donor_donate'
    });
  const v389 = stdlib.add(v351, v381);
  ;
  const v399 = stdlib.lt(v378, v334);
  stdlib.assert(v399, {
    at: './index.rsh:71:24:application',
    fs: ['at ./index.rsh:70:32:application call to [unknown function] (defined at: ./index.rsh:70:32:function exp)'],
    msg: 'donation period over',
    who: 'Donor_donate'
    });
  await stdlib.mapSet(map0, v376, v381);
  const v400 = null;
  const v401 = await txn1.getOutput('Donor_donate', 'v400', ctc0, v400);
  if (v235) {
    stdlib.protect(ctc0, await interact.out(v377, v401), {
      at: './index.rsh:66:15:application',
      fs: ['at ./index.rsh:66:15:application call to [unknown function] (defined at: ./index.rsh:66:15:function exp)', 'at ./index.rsh:73:20:application call to "ret" (defined at: ./index.rsh:70:32:function exp)', 'at ./index.rsh:70:32:application call to [unknown function] (defined at: ./index.rsh:70:32:function exp)'],
      msg: 'out',
      who: 'Donor_donate'
      });
    }
  else {
    }
  
  const v412 = stdlib.sub(v389, v383);
  ;
  const v413 = stdlib.safeAdd(v347, v381);
  const v414 = stdlib.safeAdd(v346, stdlib.checkedBigNumberify('./index.rsh:77:65:decimal', stdlib.UInt_max, '1'));
  const v478 = false;
  const v479 = v414;
  const v480 = v413;
  const v482 = v412;
  const v483 = stdlib.lt(v413, v333);
  if (v483) {
    return;
    }
  else {
    ;
    return;
    }
  
  
  };
export async function Fundraiser(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Fundraiser expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Fundraiser expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc4 = stdlib.T_Object({
    creator: ctc3,
    deadline: ctc1,
    story: ctc3,
    target: ctc1,
    title: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v319 = stdlib.protect(ctc4, interact.createFundraiser, 'for Fundraiser\'s interact field createFundraiser');
  const v325 = stdlib.protect(ctc5, interact.platformAddr, 'for Fundraiser\'s interact field platformAddr');
  
  const txn1 = await (ctc.sendrecv({
    args: [v325, v319],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:51:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v329, v330], secs: v332, time: v331, didSend: v34, from: v328 } = txn1;
      
      ;
      const v333 = v330.target;
      const v334 = v330.deadline;
      const v343 = await ctc.getContractInfo();
      
      const v345 = false;
      const v346 = stdlib.checkedBigNumberify('./index.rsh:62:74:decimal', stdlib.UInt_max, '0');
      const v347 = stdlib.checkedBigNumberify('./index.rsh:62:71:decimal', stdlib.UInt_max, '0');
      const v348 = v331;
      const v351 = stdlib.checkedBigNumberify('./index.rsh:44:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v354 = stdlib.lt(v347, v333);
        
        return v354;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v328,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v329, v330], secs: v332, time: v331, didSend: v34, from: v328 } = txn1;
  ;
  const v333 = v330.target;
  const v334 = v330.deadline;
  const v343 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.launched(v343), {
    at: './index.rsh:57:33:application',
    fs: ['at ./index.rsh:57:33:application call to [unknown function] (defined at: ./index.rsh:57:33:function exp)', 'at ./index.rsh:57:33:application call to "liftedInteract" (defined at: ./index.rsh:57:33:application)'],
    msg: 'launched',
    who: 'Fundraiser'
    });
  
  let v345 = false;
  let v346 = stdlib.checkedBigNumberify('./index.rsh:62:74:decimal', stdlib.UInt_max, '0');
  let v347 = stdlib.checkedBigNumberify('./index.rsh:62:71:decimal', stdlib.UInt_max, '0');
  let v348 = v331;
  let v351 = stdlib.checkedBigNumberify('./index.rsh:44:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v354 = stdlib.lt(v347, v333);
    
    return v354;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v377], secs: v379, time: v378, didSend: v235, from: v376 } = txn3;
    undefined /* setApiDetails */;
    const v381 = v377[stdlib.checkedBigNumberify('./index.rsh:66:14:spread', stdlib.UInt_max, '0')];
    const v382 = stdlib.safeMul(v381, stdlib.checkedBigNumberify('./index.rsh:67:39:decimal', stdlib.UInt_max, '5'));
    const v383 = stdlib.safeDiv(v382, stdlib.checkedBigNumberify('./index.rsh:67:41:decimal', stdlib.UInt_max, '100'));
    const v384 = v345 ? false : true;
    stdlib.assert(v384, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:68:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)', 'at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)'],
      msg: 'Fundraising started',
      who: 'Fundraiser'
      });
    const v386 = stdlib.gt(v381, stdlib.checkedBigNumberify('./index.rsh:69:25:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v386, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:69:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)', 'at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)'],
      msg: 'Must donate more than 0',
      who: 'Fundraiser'
      });
    const v389 = stdlib.add(v351, v381);
    ;
    const v399 = stdlib.lt(v378, v334);
    stdlib.assert(v399, {
      at: './index.rsh:71:24:application',
      fs: ['at ./index.rsh:70:32:application call to [unknown function] (defined at: ./index.rsh:70:32:function exp)'],
      msg: 'donation period over',
      who: 'Fundraiser'
      });
    await stdlib.mapSet(map0, v376, v381);
    const v400 = null;
    await txn3.getOutput('Donor_donate', 'v400', ctc0, v400);
    stdlib.protect(ctc0, await interact.seeDonation(v376, v381), {
      at: './index.rsh:74:48:application',
      fs: ['at ./index.rsh:74:48:application call to [unknown function] (defined at: ./index.rsh:74:48:function exp)', 'at ./index.rsh:74:48:application call to "liftedInteract" (defined at: ./index.rsh:74:48:application)', 'at ./index.rsh:70:32:application call to [unknown function] (defined at: ./index.rsh:70:32:function exp)'],
      msg: 'seeDonation',
      who: 'Fundraiser'
      });
    
    stdlib.protect(ctc0, await interact.thankDonor(v376), {
      at: './index.rsh:75:47:application',
      fs: ['at ./index.rsh:75:47:application call to [unknown function] (defined at: ./index.rsh:75:47:function exp)', 'at ./index.rsh:75:47:application call to "liftedInteract" (defined at: ./index.rsh:75:47:application)', 'at ./index.rsh:70:32:application call to [unknown function] (defined at: ./index.rsh:70:32:function exp)'],
      msg: 'thankDonor',
      who: 'Fundraiser'
      });
    
    const v412 = stdlib.sub(v389, v383);
    ;
    const v413 = stdlib.safeAdd(v347, v381);
    const v414 = stdlib.safeAdd(v346, stdlib.checkedBigNumberify('./index.rsh:77:65:decimal', stdlib.UInt_max, '1'));
    const cv345 = false;
    const cv346 = v414;
    const cv347 = v413;
    const cv348 = v378;
    const cv351 = v412;
    
    v345 = cv345;
    v346 = cv346;
    v347 = cv347;
    v348 = cv348;
    v351 = cv351;
    
    txn2 = txn3;
    continue;
    
    }
  ;
  return;
  
  
  };
export async function Donor_donate(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Donor_donate expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Donor_donate expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Donor_donate3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Donor_donate(uint64)byte[0]`],
    pure: [`Info_details()(byte[256],uint64,byte[256],uint64,byte[256])`],
    sigs: [`Donor_donate(uint64)byte[0]`, `Info_details()(byte[256],uint64,byte[256],uint64,byte[256])`]
    },
  GlobalNumByteSlice: 8,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByAKAAF/A5AGCPXJ960PQAIFJggBAAEBAAECAQMBBAEFAQYiNQAxGEECjypkSSJbNQEhBVs1AjEZIxJBAAoxACiBCa9mQgJbNhoAF0lBAEkiNQQjNQZJIQYMQAAKIQYSRDYaAUIASoGfg/mYDxJENAElEkQoZClkUCtkUCcEZFAnBWRQJwZkUCcHZFBJNQMhByEEWDUHQgIZNhoCFzUENhoDNhoBF0khCAxAANIhCBJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQK2RQJwRkUCcFZFAnBmRQJwdkUEk1A0lXICA1/4HYBls1/kk1BTX9gAQchk/lNP1QsDT9F0k1/CEJC4FkCjX7NAOB4AYjWBcURDT8Ig1ENPyIAb8yBjT+DEQxACgpNPwWUGaACAAAAAAAAAGQsCo1B7EisgE0+7III7IQNP+yB7M0A1cAIDT/NAMhByEEWDQDgdAGWzT+IjQDgeEGWyMINAOB6QZbNPwIMgY0A4HxBls0/Ag0+wlCAFEiEkSBoI0GiAFPIjQBEkQ0BEkiEkw0AhIRREk1BUlXACA1/4EgIQRYNf6ABMiayg80/1A0/lCwMQA0/zT+SYGIBFs0/oGAAlsiIiIyBiJCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jT9NPkMQQBrNPY091A0+FA0+RZQNPoWUDT7FlEHCFA0/BZQNP0WUDT/FlAoSwFXAH9nKUsBV39/ZytLAVf+f2cnBEsBgf0CJFhnJwVLAYH8AyRYZycGSwGB+wQkWGcnB0sBgfoFJFhnSCU1ATIGNQJCAC+xIrIBNP+yCCOyEDT2sgezQgAAMRkhCRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIzE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 7,
  stateSize: 889,
  unsupported: [`Step 0 uses 1608 bytes of logs, but the limit is 1024. Step 0 starts at /app/index.rsh:51:16:dot.`],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"}],"internalType":"struct T1","name":"_creator","type":"tuple"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"}],"internalType":"struct T1","name":"_story","type":"tuple"},{"internalType":"uint256","name":"_target","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"}],"internalType":"struct T1","name":"_title","type":"tuple"}],"internalType":"struct T2","name":"elem2","type":"tuple"}],"internalType":"struct T7","name":"v491","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"}],"internalType":"struct T1","name":"_creator","type":"tuple"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"}],"internalType":"struct T1","name":"_story","type":"tuple"},{"internalType":"uint256","name":"_target","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"}],"internalType":"struct T1","name":"_title","type":"tuple"}],"internalType":"struct T2","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v400","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v486","type":"uint256"}],"name":"Donor_donate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Info_details","outputs":[{"components":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"}],"internalType":"struct T1","name":"_creator","type":"tuple"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"}],"internalType":"struct T1","name":"_story","type":"tuple"},{"internalType":"uint256","name":"_target","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"}],"internalType":"struct T1","name":"_title","type":"tuple"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v498","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620016ea3881900390601f8201601f19168301906001600160401b03821184831017620004dc578291604052833981018181036103808112620005ff576040516200004c8162000604565b835181526020840151916001600160a01b0383168303620005ff576103409060208301938452603f190112620005ff576040519260a08401906001600160401b03821185831017620004dc57620000e891604052620000af816040880162000620565b855261028061014096878101516020880152620000d183610160830162000620565b604088015261026081015160608801520162000620565b60808401526040810192835260008055436003556040516200010a8162000604565b6000815260006020820152604062000121620006e8565b91015260ff60045416620005e6577f116da7333f6f149ee86d8454e6d8a17bec8fcf0d745ef1bbecca7492de6963446103a06040513381528351602082015260018060a01b03855116604082015262000180865160608301906200078c565ba1518015908115620005d9575b5015620005c05734620005a7576040519283016001600160401b03811184821017620004dc576040526000835260006020840152620001cb620006e8565b60408401526000606084015260006080840152600060a0840152600060c0840152600060e084015261010083019060008252600061012085015233845260018060a01b0390511660208401528151604084015260206060835101519283606086015251015160808401524390521515600014620004f2576040516001600160401b03610120820190811190821117620004dc5780610120610100920160405260008152600060208201526200027f620006e8565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015261012060018060a01b038451169384835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a0810151151560a084015260c081015160c084015260e081015160e084015201518282015260036000554360015560405192602084015260018060a01b0360208201511660408401526200034c604082015160608501906200078c565b60608101516103a084015260808101516103c084015260a081015115156103e084015260c081015161040084015260e0810151610420840152015161044080830191909152815261046081016001600160401b03811182821017620004dc5760405280516001600160401b038111620004dc57620003cc600254620007dc565b601f81116200048e575b50602091601f8211600114620004245791819260009262000418575b50508160011b916000199060031b1c1916176002555b604051610e979081620008338239f35b015190503880620003f2565b601f19821692600260005260206000209160005b85811062000475575083600195106200045b575b505050811b0160025562000408565b015160001960f88460031b161c191690553880806200044c565b9192602060018192868501518155019401920162000438565b6002600052620004ca90600080516020620016ca833981519152601f840160051c81019160208510620004d1575b601f0160051c019062000819565b38620003d6565b9091508190620004bc565b634e487b7160e01b600052604160045260246000fd5b50600080808080336108fcf1156200059b576000805560006001556200051a600254620007dc565b8062000528575b5062000408565b601f811160011462000542575060006002555b3862000521565b60026000526200058a90601f0160051c600080516020620016ca833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf62000819565b60006020812081600255556200053b565b6040513d6000823e3d90fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b905060015414386200018d565b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b606081019081106001600160401b03821117620004dc57604052565b8092916101009182910312620005ff576040519081016001600160401b03811182821017620004dc5760405260e0808294805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c08501520151910152565b6040519061010082016001600160401b03811183821017620004dc576040528160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b6040519060a082016001600160401b03811183821017620004dc57604052816200071162000698565b8152600060208201526200072462000698565b60408201526000606082015260806200073c62000698565b910152565b60e08091805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c08501520151910152565b906102406080620007da93620007a484825162000741565b6020810151610100850152620007c4604082015161012086019062000741565b6060810151610220850152015191019062000741565b565b90600182811c921680156200080e575b6020831014620007f857565b634e487b7160e01b600052602260045260246000fd5b91607f1691620007ec565b81811062000825575050565b600081556001016200081956fe6040608081526004908136101561001d575b5050361561001b57005b005b600091823560e01c90816316674bfa146102fd5781631e93b0f1146102de57816336e56ea5146101d457816346ff359c1461017957816363de7eed146100ff5750806383230757146100e15763ab53f2c60361001157346100dd57816003193601126100dd57815461008d6104ac565b91805193849283526020828185015284518093850152815b8381106100c657505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016100a5565b5080fd5b50346100dd57816003193601126100dd576020906001549051908152f35b828460203660031901126101765760209261016b849261011d610621565b92839186519161012c83610491565b87519061013882610491565b81845235905286519161014a83610476565b81835286830191885161015c81610491565b818152835283525190526107da565b015115159051908152f35b80fd5b8383806003193601126100dd5761018e610621565b9281519061019b82610476565b35815260203660231901126101d0576020936101ca9183516101bc81610491565b6024358152868201526107da565b51908152f35b8280fd5b8383346100dd576020806003193601126101d05783356001600160a01b038116908190036102da57610204610561565b5061020d610561565b8185526005835260ff848620541660028110156102c7576001036102b7575083526005815281832082519061024182610445565b805460ff811660028110156102a457835260081c60ff161515838301526001015483820152905b825193825190600282101561029157818652828401511515838701528385015185870152606086f35b634e487b7160e01b815260218752602490fd5b634e487b7160e01b875260218852602487fd5b9190508382528381830152610268565b634e487b7160e01b865260218752602486fd5b8380fd5b5050346100dd57816003193601126100dd576020906003549051908152f35b839150346100dd57816003193601126100dd576103186105cf565b506003610323610621565b92540361035f576103408361035d81858161034e61033f6104ac565b602080825183010191016106d3565b015193849101525180926103c1565bf35b602490600784519163100960cb60e01b8352820152fd5b60e08091805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c08501520151910152565b906102406080610409936103d6848251610376565b60208101516101008501526103f46040820151610120860190610376565b60608101516102208501520151910190610376565b565b90600182811c9216801561043b575b602083101461042557565b634e487b7160e01b600052602260045260246000fd5b91607f169161041a565b606081019081106001600160401b0382111761046057604052565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761046057604052565b602081019081106001600160401b0382111761046057604052565b6040519060006002546104be8161040b565b80855260019180831690811561054257506001146104fc575b5050829003601f01601f191682016001600160401b0381118382101761046057604052565b60026000908152602093509183600080516020610e6b8339815191525b83851061052e575050505083010138806104d7565b805488860183015293019284908201610519565b919250506020925060ff191682850152151560051b83010138806104d7565b6040519061056e82610445565b60006040838281528260208201520152565b6040519061010082016001600160401b03811183821017610460576040528160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b6040519060a082016001600160401b0381118382101761046057604052816105f5610580565b815260006020820152610606610580565b604082015260006060820152608061061c610580565b910152565b6040519061062e82610445565b816000815260006020820152604061061c6105cf565b51906001600160a01b038216820361065857565b600080fd5b8092916101009182910312610658576040519081016001600160401b038111828210176104605760405260e0808294805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c08501520151910152565b8082039161044083126106585760408051936001600160401b0390610120860190828211878310176104605761034091845261070e86610644565b875261071c60208701610644565b6020880152603f1901126106585781519260a08401918211848310176104605761078291835261074e8184870161065d565b8452610140850151602085015261076981610160870161065d565b838501526102608501516060850152610280850161065d565b608083015283015261038081015160608301526103a081015160808301526103c0810151908115158203610658576104209160a08401526103e081015160c084015261040081015160e0840152015161010082015290565b91906040516107e881610491565b6000815260ff60045416610e3a577f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b86060604051338152865160208201526020870151516040820152a1600360005403610e215761084761033f6104ac565b9184518015908115610e15575b5015610dfc57602085015151806000190460051181151516610d7257600581029060058204036106585760649004825260a083015115610df55760005b15610ddc5760208501515115610dc3576020850151513403610daa576080830151431015610d915760206000913383526005825260408320600160ff19825416179055818701515160016040852001557fae756e174495f18b6a7e0ecc2afc7104ab47decdc7f61d92d18fd3728868a31182604051858152a10152600080808060018060a01b03602087015116855190828215610d88575bf115610d5d576040519361014085016001600160401b038111868210176104605760405260008552600060208601526109606105cf565b60408601526000606086015260006080860152600060a0860152600060c0860152600060e08601526000610100860152600061012086015260018060a01b03835116855260018060a01b03602084015116602086015260408301516040860152606083015160608601526080830151608086015260c08301516001810190818111610d725781106106585760c086015260e083015192602082015151840193848111610d72578410610658576101006020918560e08901524382890152015191015151019051908181039283610120870152606086015111600014610cb557505060405190506001600160401b03610120820190811190821117610460578061012061010092016040526000815260006020820152610a7d6105cf565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015261012060018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a0810151151560a084015260c081015160c084015260e081015160e084015201518282015260036000554360015560405193602085015260018060a01b036020820151166040850152610b48604082015160608601906103c1565b60608101516103a085015260808101516103c085015260a081015115156103e085015260c081015161040085015260e0810151610420850152015161044080840191909152825261046082016001600160401b038111838210176104605760405281516001600160401b03811161046057610bc460025461040b565b601f8111610c6d575b50602092601f8211600114610c0a5792819293600092610bff575b50508160011b916000199060031b1c191617600255565b015190503880610be8565b601f19821693600260005260206000209160005b868110610c555750836001959610610c3c575b505050811b01600255565b015160001960f88460031b161c19169055388080610c31565b91926020600181928685015181550194019201610c1e565b6002600052610ca590600080516020610e6b833981519152601f840160051c81019160208510610cab575b601f0160051c0190610e53565b38610bcd565b9091508190610c98565b9351929360009384938493849391926001600160a01b031691849114610d69575bf115610d5d57600080556000600155610cf060025461040b565b80610cf85750565b601f8111600114610d0b57506000600255565b6002600052610d5090601f0160051c600080516020610e6b833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610e53565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc610cd6565b634e487b7160e01b600052601160045260246000fd5b506108fc610929565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b6001610891565b60405163100960cb60e01b8152600d6004820152602490fd5b90506001541438610854565b60405163100960cb60e01b8152600c6004820152602490fd5b60405163100960cb60e01b8152600b6004820152602490fd5b818110610e5e575050565b60008155600101610e5356fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 5866,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:83:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:62:61:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Donor_donate": Donor_donate,
  "Fundraiser": Fundraiser
  };
export const _APIs = {
  Donor: {
    donate: Donor_donate
    }
  };
