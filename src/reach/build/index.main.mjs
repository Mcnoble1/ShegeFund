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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    creator: ctc1,
    deadline: ctc2,
    picture: ctc1,
    story: ctc1,
    target: ctc2,
    title: ctc1,
    video: ctc1
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
      const [v319, v320, v323, v324, v339, v340, v341, v345] = svs;
      return (await ((async () => {
        
        
        return v320;}))(...args));
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
      3: [ctc0, ctc3, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2]
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
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc5 = stdlib.T_Object({
    creator: ctc4,
    deadline: ctc1,
    picture: ctc4,
    story: ctc4,
    target: ctc1,
    title: ctc4,
    video: ctc4
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
  
  
  const [v319, v320, v323, v324, v339, v340, v341, v345] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1]);
  const v351 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:100:35:application call to [unknown function] (defined at: ./index.rsh:100:35:function exp)', 'at ./index.rsh:100:35:application call to [unknown function] (defined at: ./index.rsh:100:35:function exp)'],
    msg: 'in',
    who: 'Donor_donate'
    });
  const v352 = v351[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v354 = v339 ? false : true;
  stdlib.assert(v354, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:101:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:100:35:application call to [unknown function] (defined at: ./index.rsh:100:35:function exp)', 'at ./index.rsh:100:35:application call to [unknown function] (defined at: ./index.rsh:100:35:function exp)'],
    msg: 'Fundraising started',
    who: 'Donor_donate'
    });
  const v356 = stdlib.gt(v352, stdlib.checkedBigNumberify('./index.rsh:102:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v356, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:102:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:100:35:application call to [unknown function] (defined at: ./index.rsh:100:35:function exp)', 'at ./index.rsh:100:35:application call to [unknown function] (defined at: ./index.rsh:100:35:function exp)'],
    msg: 'Must donate more than 0',
    who: 'Donor_donate'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v319, v320, v323, v324, v339, v340, v341, v345, v351],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v352, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v367], secs: v369, time: v368, didSend: v231, from: v366 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Donor_donate"
        });
      const v371 = v367[stdlib.checkedBigNumberify('./index.rsh:100:14:spread', stdlib.UInt_max, '0')];
      const v377 = stdlib.add(v345, v371);
      sim_r.txns.push({
        amt: v371,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 0, v366, v371);
      const v386 = null;
      const v387 = await txn1.getOutput('Donor_donate', 'v386', ctc0, v386);
      
      const v395 = stdlib.safeAdd(v341, v371);
      const v396 = stdlib.safeAdd(v340, stdlib.checkedBigNumberify('./index.rsh:109:65:decimal', stdlib.UInt_max, '1'));
      const v460 = false;
      const v461 = v396;
      const v462 = v395;
      const v464 = v377;
      const v465 = stdlib.lt(v395, v323);
      if (v465) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v319,
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
    tys: [ctc3, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v367], secs: v369, time: v368, didSend: v231, from: v366 } = txn1;
  undefined /* setApiDetails */;
  const v371 = v367[stdlib.checkedBigNumberify('./index.rsh:100:14:spread', stdlib.UInt_max, '0')];
  const v372 = v339 ? false : true;
  stdlib.assert(v372, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:101:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:100:35:application call to [unknown function] (defined at: ./index.rsh:100:35:function exp)', 'at ./index.rsh:100:35:application call to [unknown function] (defined at: ./index.rsh:100:35:function exp)'],
    msg: 'Fundraising started',
    who: 'Donor_donate'
    });
  const v374 = stdlib.gt(v371, stdlib.checkedBigNumberify('./index.rsh:102:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v374, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:102:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:100:35:application call to [unknown function] (defined at: ./index.rsh:100:35:function exp)', 'at ./index.rsh:100:35:application call to [unknown function] (defined at: ./index.rsh:100:35:function exp)'],
    msg: 'Must donate more than 0',
    who: 'Donor_donate'
    });
  const v377 = stdlib.add(v345, v371);
  ;
  const v385 = stdlib.lt(v368, v324);
  stdlib.assert(v385, {
    at: './index.rsh:104:24:application',
    fs: ['at ./index.rsh:103:32:application call to [unknown function] (defined at: ./index.rsh:103:32:function exp)'],
    msg: 'donation period over',
    who: 'Donor_donate'
    });
  await stdlib.mapSet(map0, v366, v371);
  const v386 = null;
  const v387 = await txn1.getOutput('Donor_donate', 'v386', ctc0, v386);
  if (v231) {
    stdlib.protect(ctc0, await interact.out(v367, v387), {
      at: './index.rsh:100:15:application',
      fs: ['at ./index.rsh:100:15:application call to [unknown function] (defined at: ./index.rsh:100:15:function exp)', 'at ./index.rsh:106:20:application call to "ret" (defined at: ./index.rsh:103:32:function exp)', 'at ./index.rsh:103:32:application call to [unknown function] (defined at: ./index.rsh:103:32:function exp)'],
      msg: 'out',
      who: 'Donor_donate'
      });
    }
  else {
    }
  
  const v395 = stdlib.safeAdd(v341, v371);
  const v396 = stdlib.safeAdd(v340, stdlib.checkedBigNumberify('./index.rsh:109:65:decimal', stdlib.UInt_max, '1'));
  const v460 = false;
  const v461 = v396;
  const v462 = v395;
  const v464 = v377;
  const v465 = stdlib.lt(v395, v323);
  if (v465) {
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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc4 = stdlib.T_Object({
    creator: ctc3,
    deadline: ctc1,
    picture: ctc3,
    story: ctc3,
    target: ctc1,
    title: ctc3,
    video: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v309 = stdlib.protect(ctc4, interact.createFundraiser, 'for Fundraiser\'s interact field createFundraiser');
  
  const txn1 = await (ctc.sendrecv({
    args: [v309],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:78:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:78:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v320], secs: v322, time: v321, didSend: v34, from: v319 } = txn1;
      
      ;
      const v323 = v320.target;
      const v324 = v320.deadline;
      const v337 = await ctc.getContractInfo();
      
      const v339 = false;
      const v340 = stdlib.checkedBigNumberify('./index.rsh:89:74:decimal', stdlib.UInt_max, '0');
      const v341 = stdlib.checkedBigNumberify('./index.rsh:89:71:decimal', stdlib.UInt_max, '0');
      const v342 = v321;
      const v345 = stdlib.checkedBigNumberify('./index.rsh:72:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v348 = stdlib.lt(v341, v323);
        
        return v348;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v319,
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
    tys: [ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v320], secs: v322, time: v321, didSend: v34, from: v319 } = txn1;
  ;
  const v323 = v320.target;
  const v324 = v320.deadline;
  const v337 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.launched(v337), {
    at: './index.rsh:84:33:application',
    fs: ['at ./index.rsh:84:33:application call to [unknown function] (defined at: ./index.rsh:84:33:function exp)', 'at ./index.rsh:84:33:application call to "liftedInteract" (defined at: ./index.rsh:84:33:application)'],
    msg: 'launched',
    who: 'Fundraiser'
    });
  
  let v339 = false;
  let v340 = stdlib.checkedBigNumberify('./index.rsh:89:74:decimal', stdlib.UInt_max, '0');
  let v341 = stdlib.checkedBigNumberify('./index.rsh:89:71:decimal', stdlib.UInt_max, '0');
  let v342 = v321;
  let v345 = stdlib.checkedBigNumberify('./index.rsh:72:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v348 = stdlib.lt(v341, v323);
    
    return v348;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v367], secs: v369, time: v368, didSend: v231, from: v366 } = txn3;
    undefined /* setApiDetails */;
    const v371 = v367[stdlib.checkedBigNumberify('./index.rsh:100:14:spread', stdlib.UInt_max, '0')];
    const v372 = v339 ? false : true;
    stdlib.assert(v372, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:101:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:100:35:application call to [unknown function] (defined at: ./index.rsh:100:35:function exp)', 'at ./index.rsh:100:35:application call to [unknown function] (defined at: ./index.rsh:100:35:function exp)'],
      msg: 'Fundraising started',
      who: 'Fundraiser'
      });
    const v374 = stdlib.gt(v371, stdlib.checkedBigNumberify('./index.rsh:102:25:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v374, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:102:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:100:35:application call to [unknown function] (defined at: ./index.rsh:100:35:function exp)', 'at ./index.rsh:100:35:application call to [unknown function] (defined at: ./index.rsh:100:35:function exp)'],
      msg: 'Must donate more than 0',
      who: 'Fundraiser'
      });
    const v377 = stdlib.add(v345, v371);
    ;
    const v385 = stdlib.lt(v368, v324);
    stdlib.assert(v385, {
      at: './index.rsh:104:24:application',
      fs: ['at ./index.rsh:103:32:application call to [unknown function] (defined at: ./index.rsh:103:32:function exp)'],
      msg: 'donation period over',
      who: 'Fundraiser'
      });
    await stdlib.mapSet(map0, v366, v371);
    const v386 = null;
    await txn3.getOutput('Donor_donate', 'v386', ctc0, v386);
    stdlib.protect(ctc0, await interact.seeDonation(v366, v371), {
      at: './index.rsh:107:48:application',
      fs: ['at ./index.rsh:107:48:application call to [unknown function] (defined at: ./index.rsh:107:48:function exp)', 'at ./index.rsh:107:48:application call to "liftedInteract" (defined at: ./index.rsh:107:48:application)', 'at ./index.rsh:103:32:application call to [unknown function] (defined at: ./index.rsh:103:32:function exp)'],
      msg: 'seeDonation',
      who: 'Fundraiser'
      });
    
    stdlib.protect(ctc0, await interact.thankDonor(v366), {
      at: './index.rsh:108:47:application',
      fs: ['at ./index.rsh:108:47:application call to [unknown function] (defined at: ./index.rsh:108:47:function exp)', 'at ./index.rsh:108:47:application call to "liftedInteract" (defined at: ./index.rsh:108:47:application)', 'at ./index.rsh:103:32:application call to [unknown function] (defined at: ./index.rsh:103:32:function exp)'],
      msg: 'thankDonor',
      who: 'Fundraiser'
      });
    
    const v395 = stdlib.safeAdd(v341, v371);
    const v396 = stdlib.safeAdd(v340, stdlib.checkedBigNumberify('./index.rsh:109:65:decimal', stdlib.UInt_max, '1'));
    const cv339 = false;
    const cv340 = v396;
    const cv341 = v395;
    const cv342 = v368;
    const cv345 = v377;
    
    v339 = cv339;
    v340 = cv340;
    v341 = cv341;
    v342 = cv342;
    v345 = cv345;
    
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
    pure: [`Info_details()(byte[64],uint64,byte[64],byte[64],uint64,byte[64],byte[64])`],
    sigs: [`Donor_donate(uint64)byte[0]`, `Info_details()(byte[64],uint64,byte[64],byte[64],uint64,byte[64],byte[64])`]
    },
  GlobalNumByteSlice: 5,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByAIAAED9cn3rQ8g0AICBSYFAQABAQABAgEDIjUAMRhBAh4qZEkiWzUBgQhbNQIxGSMSQQAKMQAogQmvZkIB6jYaABdJQQA7IjUEIzUGSSUMQAAJJRJENhoBQgA+gcPM5ZMFEkQ0ASQSRChkKWRQK2RQJwRkUEk1AyEEIQVYNQdCAbY2GgIXNQQ2GgM2GgEXSSEGDEAAoiEGEkQkNAESRDQESSISTDQCEhFEKGQpZFArZFAnBGRQSTUDgfgCWzX/STUFNf6ABByGT+U0/lCwNP4XNf00A4GAAyNYFxRENP0iDUQ0/YgBdzIGNP8MRDEAKCk0/RZQZoAIAAAAAAAAAYKwKjUHNANXACA0AyEEIQVYNAOB8AJbNP8iNAOBgQNbIwg0A4GJA1s0/QgyBjQDgZEDWzT9CEIAQCISRIGgjQaIARwiNAESRDQESSISTDQCEhFESTUFNf+ABHZ0a/00/1CwMQA0/0mByAFbNP+BQFsiIiIyBiJCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc0/TT5DEEASzT3NPhQNPkWUDT6FlA0+xZRBwhQNPwWUDT9FlA0/xZQKEsBVwB/ZylLAVd/f2crSwFX/n9nJwRLAYH9AoEcWGdIJDUBMgY1AkIAL7EisgE0/7III7IQNPeyB7NCAAAxGSEHEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQcxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 4,
  stateSize: 409,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_creator","type":"tuple"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_picture","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_story","type":"tuple"},{"internalType":"uint256","name":"_target","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_title","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_video","type":"tuple"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v473","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_creator","type":"tuple"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_picture","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_story","type":"tuple"},{"internalType":"uint256","name":"_target","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_title","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_video","type":"tuple"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v386","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v468","type":"uint256"}],"name":"Donor_donate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Info_details","outputs":[{"components":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_creator","type":"tuple"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_picture","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_story","type":"tuple"},{"internalType":"uint256","name":"_target","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_title","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_video","type":"tuple"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v480","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620015e33881900390601f8201601f19168301906001600160401b03821184831017620004a1578291604052833981018181036101a08112620005c457610180604051916200005083620005c9565b84518352601f190112620005c4576040519160e08301906001600160401b03821184831017620004a157620000f191604052620000918160208701620005e5565b845260608501516020850152620000ac8160808701620005e5565b6040850152620000c08160c08701620005e5565b6060850152610100850151608085015261016061012095620000e583888301620005e5565b60a087015201620005e5565b60c0830152602081019182526000805543600355604051606081016001600160401b03811182821017620004a15760405260008152600060208201526040620001396200061f565b91015260ff60045416620005ab577f7f1466beda51671aebde8e2450702d6d4666e4a2a1bf988c154403921aaeaa466101c0604051338152835160208201526200018985516040830190620006d5565ba15180159081156200059e575b50156200058557346200056c576040519182016001600160401b03811183821017620004a15760405260008252620001cd6200061f565b6020830152600060408301526000606083015260006080830152600060a0830152600060c083015260e082016000815260006101008401523383528151602084015260206080835101519283604086015251015160608401524390521515600014620004b7576040516001600160401b03610100820190811190821117620004a1578061010060e0920160405260008152620002686200061f565b6020820152600060408201526000606082015260006080820152600060a0820152600060c082015260008282015261010060018060a01b038451169384835260208101516020840152604081015160408401526060810151606084015260808101511515608084015260a081015160a084015260c081015160c08401520151828201526003600055436001556040519260208401526200031160208201516040850190620006d5565b60408101516101c084015260608101516101e08401526080810151151561020084015260a081015161022084015260c0810151610240840152015161026080830191909152815261028081016001600160401b03811182821017620004a15760405280516001600160401b038111620004a157620003916002546200074d565b601f811162000453575b50602091601f8211600114620003e957918192600092620003dd575b50508160011b916000199060031b1c1916176002555b604051610e1f9081620007a48239f35b015190503880620003b7565b601f19821692600260005260206000209160005b8581106200043a5750836001951062000420575b505050811b01600255620003cd565b015160001960f88460031b161c1916905538808062000411565b91926020600181928685015181550194019201620003fd565b60026000526200048f90600080516020620015c3833981519152601f840160051c8101916020851062000496575b601f0160051c01906200078a565b386200039b565b909150819062000481565b634e487b7160e01b600052604160045260246000fd5b50600080808080336108fcf1156200056057600080556000600155620004df6002546200074d565b80620004ed575b50620003cd565b601f811160011462000507575060006002555b38620004e6565b60026000526200054f90601f0160051c600080516020620015c3833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6200078a565b600060208120816002555562000500565b6040513d6000823e3d90fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b9050600154143862000196565b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b604081019081106001600160401b03821117620004a157604052565b9190826040910312620005c457604080519081016001600160401b03811182821017620004a1576040526020808294805184520151910152565b6040805190919060e08101906001600160401b03821181831017620004a15760c09082855280946200065184620005c9565b60009384815284610100840152825283602083015280516200067381620005c9565b8481528460208201528183015280516200068d81620005c9565b84815284602082015260608301528360808301528051620006ae81620005c9565b84815284602082015260a08301525192620006c984620005c9565b80845260208401520152565b6101609060c081519182518552602080930151838601528281015160408601528260408201518051606088015201516080860152826060820151805160a0880152015182860152608081015160e08601528260a082015180516101008801520151610120860152015180516101408501520151910152565b90600182811c921680156200077f575b60208310146200076957565b634e487b7160e01b600052602260045260246000fd5b91607f16916200075d565b81811062000796575050565b600081556001016200078a56fe6040608081526004908136101561001d575b5050361561001b57005b005b600091823560e01c90816316674bfa146102fd5781631e93b0f1146102de57816336e56ea5146101d457816346ff359c1461017957816363de7eed146100ff5750806383230757146100e15763ab53f2c60361001157346100dd57816003193601126100dd57815461008d6104b2565b91805193849283526020828185015284518093850152815b8381106100c657505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016100a5565b5080fd5b50346100dd57816003193601126100dd576020906001549051908152f35b828460203660031901126101765760209261016b849261011d610639565b92839186519161012c83610474565b87519061013882610474565b81845235905286519161014a83610459565b81835286830191885161015c81610474565b818152835283525190526107c3565b015115159051908152f35b80fd5b8383806003193601126100dd5761018e610639565b9281519061019b82610459565b35815260203660231901126101d0576020936101ca9183516101bc81610474565b6024358152868201526107c3565b51908152f35b8280fd5b8383346100dd576020806003193601126101d05783356001600160a01b038116908190036102da5761020461056f565b5061020d61056f565b8185526005835260ff848620541660028110156102c7576001036102b7575083526005815281832082519061024182610428565b805460ff811660028110156102a457835260081c60ff161515838301526001015483820152905b825193825190600282101561029157818652828401511515838701528385015185870152606086f35b634e487b7160e01b815260218752602490fd5b634e487b7160e01b875260218852602487fd5b9190508382528381830152610268565b634e487b7160e01b865260218752602486fd5b8380fd5b5050346100dd57816003193601126100dd576020906003549051908152f35b839150346100dd57816003193601126100dd5761031861058e565b506003610323610639565b92540361035f576101808361035d8185602061034e6103406104b2565b82808251830101910161069e565b01519384910152518092610376565bf35b602490600784519163100960cb60e01b8352820152fd5b6101609060c081519182518552602080930151838601528281015160408601528260408201518051606088015201516080860152826060820151805160a0880152015182860152608081015160e08601528260a082015180516101008801520151610120860152015180516101408501520151910152565b90600182811c9216801561041e575b602083101461040857565b634e487b7160e01b600052602260045260246000fd5b91607f16916103fd565b606081019081106001600160401b0382111761044357604052565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761044357604052565b602081019081106001600160401b0382111761044357604052565b601f909101601f19168101906001600160401b0382119082101761044357604052565b60405190600082600254916104c6836103ee565b80835260019380851690811561054e57506001146104ee575b506104ec9250038361048f565b565b600260009081527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace94602093509091905b8183106105365750506104ec9350820101386104df565b8554888401850152948501948794509183019161051f565b90506104ec94506020925060ff191682840152151560051b820101386104df565b6040519061057c82610428565b60006040838281528260208201520152565b6040805190919060e08101906001600160401b038211818310176104435760c09082855280946105bd84610459565b60009384815284610100840152825283602083015280516105dd81610459565b8481528460208201528183015280516105f581610459565b8481528460208201526060830152836080830152805161061481610459565b84815284602082015260a0830152519261062d84610459565b80845260208401520152565b6040519061064682610428565b816000815260006020820152604061065c61058e565b910152565b919082604091031261069957604080519081016001600160401b03811182821017610443576040526020808294805184520151910152565b600080fd5b8082039161026083126106995760408051939091610100916001600160401b039190838701838111888210176104435785528551906001600160a01b038216820361069957610180918852601f1901126106995783519260e08401928311848410176104435761076b9285526107178260208801610661565b8452606086015160208501526107308260808801610661565b858501526107418260c08801610661565b6060850152850151608084015261075c816101208701610661565b60a08401526101608501610661565b60c082015260208401526101a0820151908301526101c081015160608301526101e08101519081151582036106995761024091608084015261020081015160a084015261022081015160c0840152015160e082015290565b9060049060ff825416610de3576040918251338152845191602092838301527f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b860608488019384515188820152a1600360005403610dcc57845194600096600297885497866108318a6103ee565b918281528181019260019b8c81169081600014610db25750600114610d70575b506108618161086b95038261048f565b805101019061069e565b90518015908115610d65575b5015610d4e57608081015115610d485760005b15610d315783515115610d1a578351513403610d035760608101958651431015610cec5785600091338352600582528483208a60ff198254161790558651518a86852001557f09eac39cce54dda4f1b87660d478867c00ef58012371562edac8d183780dd3ef828651858152a1015281516001600160401b0396909490610120860188811187821017610cd75784526000865261092561058e565b878701526000848701526000606087015260006080870152600060a0870152600060c087015260e086019060008252600061010088015260018060a01b0384511687528784015188880152848401518588015251606087015260a083015189810190818111610cc25781106106995760a087015260c083015192825151840193848111610cc25784106106995760e0918460c089015243905201519051510190816101008601528285015111600014610c2257508051610100810181811087821117610c0d5782526000815260e0906109fc61058e565b868201526000838201526000606082015260006080820152600060a0820152600060c082015260008282015261010060018060a01b0386511695868352878101518884015284810151858401526060810151606084015260808101511515608084015260a081015160a084015260c081015160c0840152015182820152600360005543885582519486860152610a988682015184870190610376565b828101516101c086015260608101516101e08601526080810151151561020086015260a081015161022086015260c081015161024086015201516102609081850152835261028083019083821086831117610bf857528151938411610be35750610b0285546103ee565b601f8111610ba8575b5081601f8411600114610b455750928293918392600094610b3a575b50501b916000199060031b1c1916179055565b015192503880610b27565b919083601f1981168760005284600020946000905b88838310610b8e5750505010610b75575b505050811b019055565b015160001960f88460031b161c19169055388080610b6b565b858701518855909601959485019487935090810190610b5a565b610bd3908660005283600020601f860160051c810191858710610bd9575b601f0160051c0190610dfb565b38610b0b565b9091508190610bc6565b604190634e487b7160e01b6000525260246000fd5b604183634e487b7160e01b6000525260246000fd5b604184634e487b7160e01b6000525260246000fd5b92519596959394509260009283925082918291906001600160a01b0316828215610cb9575bf115610caf57506000805560008355610c6082546103ee565b9081610c6d575b50505050565b600093601f8311600114610c8957505050555b38808080610c67565b8492610ca591858552601f848620920160051c82019101610dfb565b8120915555610c80565b513d6000823e3d90fd5b506108fc610c47565b601187634e487b7160e01b6000525260246000fd5b604186634e487b7160e01b6000525260246000fd5b825163100960cb60e01b8152601181860152602490fd5b815163100960cb60e01b8152601081850152602490fd5b815163100960cb60e01b8152600f81850152602490fd5b815163100960cb60e01b8152600e81850152602490fd5b8661088a565b815163100960cb60e01b8152600d81850152602490fd5b905087541438610877565b90919293508b60005282600020908b6000925b828410610d9c5750505081018201929190610861610851565b80548585018701528b95909301928d9101610d83565b60ff1916855250151560051b810182019350610861610851565b602490600c86519163100960cb60e01b8352820152fd5b60405163100960cb60e01b8152600b81840152602490fd5b818110610e06575050565b60008155600101610dfb56fea164736f6c6343000810000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 5603,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:119:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:89:61:after expr stmt semicolon',
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
