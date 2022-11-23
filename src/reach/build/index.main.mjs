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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc3 = stdlib.T_Object({
    deadline: ctc1,
    picture: ctc2,
    story: ctc2,
    target: ctc1,
    video: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    None: ctc5,
    Some: ctc1
    });
  const map0_ctc = ctc6;
  
  
  const Info_details = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v317, v318, v321, v322, v335, v336, v337, v341] = svs;
      return (await ((async () => {
        
        
        return v318;}))(...args));
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
      3: [ctc0, ctc3, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1]
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
    deadline: ctc1,
    picture: ctc4,
    story: ctc4,
    target: ctc1,
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
  
  
  const [v317, v318, v321, v322, v335, v336, v337, v341] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1]);
  const v347 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)', 'at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)'],
    msg: 'in',
    who: 'Donor_donate'
    });
  const v348 = v347[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v350 = v335 ? false : true;
  stdlib.assert(v350, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:87:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)', 'at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)'],
    msg: 'Fundraising started',
    who: 'Donor_donate'
    });
  const v352 = stdlib.gt(v348, stdlib.checkedBigNumberify('./index.rsh:88:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v352, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:88:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)', 'at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)'],
    msg: 'Must donate more than 0',
    who: 'Donor_donate'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v317, v318, v321, v322, v335, v336, v337, v341, v347],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v348, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v363], secs: v365, time: v364, didSend: v229, from: v362 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Donor_donate"
        });
      const v367 = v363[stdlib.checkedBigNumberify('./index.rsh:86:14:spread', stdlib.UInt_max, '0')];
      const v373 = stdlib.add(v341, v367);
      sim_r.txns.push({
        amt: v367,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 0, v362, v367);
      const v382 = null;
      const v383 = await txn1.getOutput('Donor_donate', 'v382', ctc0, v382);
      
      const v391 = stdlib.safeAdd(v337, v367);
      const v392 = stdlib.safeAdd(v336, stdlib.checkedBigNumberify('./index.rsh:95:65:decimal', stdlib.UInt_max, '1'));
      const v452 = false;
      const v453 = v392;
      const v454 = v391;
      const v456 = v373;
      const v457 = stdlib.lt(v391, v321);
      if (v457) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v317,
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
  const {data: [v363], secs: v365, time: v364, didSend: v229, from: v362 } = txn1;
  undefined /* setApiDetails */;
  const v367 = v363[stdlib.checkedBigNumberify('./index.rsh:86:14:spread', stdlib.UInt_max, '0')];
  const v368 = v335 ? false : true;
  stdlib.assert(v368, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:87:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)', 'at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)'],
    msg: 'Fundraising started',
    who: 'Donor_donate'
    });
  const v370 = stdlib.gt(v367, stdlib.checkedBigNumberify('./index.rsh:88:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v370, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:88:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)', 'at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)'],
    msg: 'Must donate more than 0',
    who: 'Donor_donate'
    });
  const v373 = stdlib.add(v341, v367);
  ;
  const v381 = stdlib.lt(v364, v322);
  stdlib.assert(v381, {
    at: './index.rsh:90:24:application',
    fs: ['at ./index.rsh:89:32:application call to [unknown function] (defined at: ./index.rsh:89:32:function exp)'],
    msg: 'donation period over',
    who: 'Donor_donate'
    });
  await stdlib.mapSet(map0, v362, v367);
  const v382 = null;
  const v383 = await txn1.getOutput('Donor_donate', 'v382', ctc0, v382);
  if (v229) {
    stdlib.protect(ctc0, await interact.out(v363, v383), {
      at: './index.rsh:86:15:application',
      fs: ['at ./index.rsh:86:15:application call to [unknown function] (defined at: ./index.rsh:86:15:function exp)', 'at ./index.rsh:92:20:application call to "ret" (defined at: ./index.rsh:89:32:function exp)', 'at ./index.rsh:89:32:application call to [unknown function] (defined at: ./index.rsh:89:32:function exp)'],
      msg: 'out',
      who: 'Donor_donate'
      });
    }
  else {
    }
  
  const v391 = stdlib.safeAdd(v337, v367);
  const v392 = stdlib.safeAdd(v336, stdlib.checkedBigNumberify('./index.rsh:95:65:decimal', stdlib.UInt_max, '1'));
  const v452 = false;
  const v453 = v392;
  const v454 = v391;
  const v456 = v373;
  const v457 = stdlib.lt(v391, v321);
  if (v457) {
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
    deadline: ctc1,
    picture: ctc3,
    story: ctc3,
    target: ctc1,
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
  
  
  const v307 = stdlib.protect(ctc4, interact.createFundraiser, 'for Fundraiser\'s interact field createFundraiser');
  
  const txn1 = await (ctc.sendrecv({
    args: [v307],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:70:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:70:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v318], secs: v320, time: v319, didSend: v34, from: v317 } = txn1;
      
      ;
      const v321 = v318.target;
      const v322 = v318.deadline;
      const v328 = await ctc.getContractInfo();
      
      const v335 = false;
      const v336 = stdlib.checkedBigNumberify('./index.rsh:81:74:decimal', stdlib.UInt_max, '0');
      const v337 = stdlib.checkedBigNumberify('./index.rsh:81:71:decimal', stdlib.UInt_max, '0');
      const v338 = v319;
      const v341 = stdlib.checkedBigNumberify('./index.rsh:64:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v344 = stdlib.lt(v337, v321);
        
        return v344;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v317,
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
  const {data: [v318], secs: v320, time: v319, didSend: v34, from: v317 } = txn1;
  ;
  const v321 = v318.target;
  const v322 = v318.deadline;
  const v327 = stdlib.lt(v319, v322);
  stdlib.assert(v327, {
    at: './index.rsh:73:12:application',
    fs: [],
    msg: 'too late',
    who: 'Fundraiser'
    });
  const v328 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.launched(v328), {
    at: './index.rsh:75:33:application',
    fs: ['at ./index.rsh:75:33:application call to [unknown function] (defined at: ./index.rsh:75:33:function exp)', 'at ./index.rsh:75:33:application call to "liftedInteract" (defined at: ./index.rsh:75:33:application)'],
    msg: 'launched',
    who: 'Fundraiser'
    });
  
  let v335 = false;
  let v336 = stdlib.checkedBigNumberify('./index.rsh:81:74:decimal', stdlib.UInt_max, '0');
  let v337 = stdlib.checkedBigNumberify('./index.rsh:81:71:decimal', stdlib.UInt_max, '0');
  let v338 = v319;
  let v341 = stdlib.checkedBigNumberify('./index.rsh:64:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v344 = stdlib.lt(v337, v321);
    
    return v344;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v363], secs: v365, time: v364, didSend: v229, from: v362 } = txn3;
    undefined /* setApiDetails */;
    const v367 = v363[stdlib.checkedBigNumberify('./index.rsh:86:14:spread', stdlib.UInt_max, '0')];
    const v368 = v335 ? false : true;
    stdlib.assert(v368, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:87:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)', 'at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)'],
      msg: 'Fundraising started',
      who: 'Fundraiser'
      });
    const v370 = stdlib.gt(v367, stdlib.checkedBigNumberify('./index.rsh:88:25:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v370, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:88:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)', 'at ./index.rsh:86:35:application call to [unknown function] (defined at: ./index.rsh:86:35:function exp)'],
      msg: 'Must donate more than 0',
      who: 'Fundraiser'
      });
    const v373 = stdlib.add(v341, v367);
    ;
    const v381 = stdlib.lt(v364, v322);
    stdlib.assert(v381, {
      at: './index.rsh:90:24:application',
      fs: ['at ./index.rsh:89:32:application call to [unknown function] (defined at: ./index.rsh:89:32:function exp)'],
      msg: 'donation period over',
      who: 'Fundraiser'
      });
    await stdlib.mapSet(map0, v362, v367);
    const v382 = null;
    await txn3.getOutput('Donor_donate', 'v382', ctc0, v382);
    stdlib.protect(ctc0, await interact.seeDonation(v362, v367), {
      at: './index.rsh:93:48:application',
      fs: ['at ./index.rsh:93:48:application call to [unknown function] (defined at: ./index.rsh:93:48:function exp)', 'at ./index.rsh:93:48:application call to "liftedInteract" (defined at: ./index.rsh:93:48:application)', 'at ./index.rsh:89:32:application call to [unknown function] (defined at: ./index.rsh:89:32:function exp)'],
      msg: 'seeDonation',
      who: 'Fundraiser'
      });
    
    stdlib.protect(ctc0, await interact.thankDonor(v362), {
      at: './index.rsh:94:47:application',
      fs: ['at ./index.rsh:94:47:application call to [unknown function] (defined at: ./index.rsh:94:47:function exp)', 'at ./index.rsh:94:47:application call to "liftedInteract" (defined at: ./index.rsh:94:47:application)', 'at ./index.rsh:89:32:application call to [unknown function] (defined at: ./index.rsh:89:32:function exp)'],
      msg: 'thankDonor',
      who: 'Fundraiser'
      });
    
    const v391 = stdlib.safeAdd(v337, v367);
    const v392 = stdlib.safeAdd(v336, stdlib.checkedBigNumberify('./index.rsh:95:65:decimal', stdlib.UInt_max, '1'));
    const cv335 = false;
    const cv336 = v392;
    const cv337 = v391;
    const cv338 = v364;
    const cv341 = v373;
    
    v335 = cv335;
    v336 = cv336;
    v337 = cv337;
    v338 = cv338;
    v341 = cv341;
    
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
    pure: [`Info_details()(uint64,byte[64],byte[64],uint64,byte[64])`],
    sigs: [`Donor_donate(uint64)byte[0]`, `Info_details()(uint64,byte[64],byte[64],uint64,byte[64])`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByAFAAED9cn3rQ8CJgQBAAEBAAECIjUAMRhBAhAqZEkiWzUBgQhbNQIxGSMSQQAKMQAogQmvZkIB3DYaABdJQQA1IjUEIzUGSSUMQAAJJRJENhoBQgA4gZzUg/UMEkQ0ASQSRChkKWRQK2RQSTUDVyDQNQdCAa42GgIXNQQ2GgM2GgEXSSEEDEAAnCEEEkQkNAESRDQESSISTDQCEhFEKGQpZFArZFBJNQOB+AFbNf9JNQU1/oAEHIZP5TT+ULA0/hc1/TQDgYACI1gXFEQ0/SINRDT9iAFzMgY0/wxEMQAoKTT9FlBmgAgAAAAAAAABfrAqNQc0A1cAIDQDVyDQNAOB8AFbNP8iNAOBgQJbIwg0A4GJAls0/QgyBjQDgZECWzT9CEIASSISRIGgjQaIARoiNAESRDQESSISTDQCEhFESTUFNf+ABJrH5aE0/1CwNP8iWzX+MgY0/gxEMQA0/0mBiAFbNP4iIiIyBiJCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc0/TT5DEEAQDT3NPhQNPkWUDT6FlA0+xZRBwhQNPwWUDT9FlA0/xZQKEsBVwB/ZylLAVd/f2crSwFX/htnSCQ1ATIGNQJCAC+xIrIBNP+yCCOyEDT3sgezQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEEMTUSRCIxNhJEIzE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 3,
  stateSize: 281,
  unsupported: [],
  version: 11,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_picture","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_story","type":"tuple"},{"internalType":"uint256","name":"_target","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_video","type":"tuple"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v465","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_picture","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_story","type":"tuple"},{"internalType":"uint256","name":"_target","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_video","type":"tuple"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v382","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v460","type":"uint256"}],"name":"Donor_donate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Info_details","outputs":[{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_picture","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_story","type":"tuple"},{"internalType":"uint256","name":"_target","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_video","type":"tuple"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v472","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620014e33881900390601f8201601f19168301906001600160401b038211848310176200047e5782916040528339810181810361012092838212620005ba57610100604051926200005284620005bf565b82518452601f190112620005ba576040519260a084016001600160401b038111858210176200047e57620000c69260e091604052602081015186526200009c8360408301620005db565b6020870152620000b08360808301620005db565b604087015260c0810151606087015201620005db565b6080830152602081019182526000805543600355604051606081016001600160401b038111828210176200047e57604052600081526000602082015260406200010e62000615565b91015260ff60045416620005a1577fef66aa106c0508f3d8156a920773f905b209f6b4184770e6473738c735375758610140604051338152835160208201526200015e8551604083019062000691565ba151801590811562000594575b50156200057b5734620005625780515143101562000549576040519182016001600160401b038111838210176200047e5760405260008252620001ad62000615565b6020830152600060408301526000606083015260006080830152600060a0830152600060c083015260e08201600081526000610100840152338352815160208401526060825101519182604085015251516060840152439052151560001462000494576040516001600160401b036101008201908111908211176200047e578061010060e09201604052600081526200024562000615565b6020820152600060408201526000606082015260006080820152600060a0820152600060c082015260008282015261010060018060a01b038451169384835260208101516020840152604081015160408401526060810151606084015260808101511515608084015260a081015160a084015260c081015160c0840152015182820152600360005543600155604051926020840152620002ee6020820151604085019062000691565b604081015161014084015260608101516101608401526080810151151561018084015260a08101516101a084015260c08101516101c084015201516101e080830191909152815261020081016001600160401b038111828210176200047e5760405280516001600160401b0381116200047e576200036e600254620006db565b601f811162000430575b50602091601f8211600114620003c657918192600092620003ba575b50508160011b916000199060031b1c1916176002555b604051610d919081620007328239f35b01519050388062000394565b601f19821692600260005260206000209160005b8581106200041757508360019510620003fd575b505050811b01600255620003aa565b015160001960f88460031b161c19169055388080620003ee565b91926020600181928685015181550194019201620003da565b60026000526200046c90600080516020620014c3833981519152601f840160051c8101916020851062000473575b601f0160051c019062000718565b3862000378565b90915081906200045e565b634e487b7160e01b600052604160045260246000fd5b50600080808080336108fcf1156200053d57600080556000600155620004bc600254620006db565b80620004ca575b50620003aa565b601f8111600114620004e4575060006002555b38620004c3565b60026000526200052c90601f0160051c600080516020620014c3833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf62000718565b6000602081208160025555620004dd565b6040513d6000823e3d90fd5b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b905060015414386200016b565b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b604081019081106001600160401b038211176200047e57604052565b9190826040910312620005ba57604080519081016001600160401b038111828210176200047e576040526020808294805184520151910152565b60408051919060a083016001600160401b038111848210176200047e57815260808360009283825280516200064a81620005bf565b848152846020820152602083015280516200066581620005bf565b8481528460208201528183015283606083015251926200068584620005bf565b80845260208401520152565b6020608060e0928051855282808201518051828801520151604086015282604082015180516060880152015182860152606081015160a08601520151805160c08501520151910152565b90600182811c921680156200070d575b6020831014620006f757565b634e487b7160e01b600052602260045260246000fd5b91607f1691620006eb565b81811062000724575050565b600081556001016200071856fe6040608081526004908136101561001d575b5050361561001b57005b005b600091823560e01c90816316674bfa146102fd5781631e93b0f1146102de57816336e56ea5146101d457816346ff359c1461017957816363de7eed146100ff5750806383230757146100e15763ab53f2c60361001157346100dd57816003193601126100dd57815461008d610484565b91805193849283526020828185015284518093850152815b8381106100c657505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016100a5565b5080fd5b50346100dd57816003193601126100dd576020906001549051908152f35b828460203660031901126101765760209261016b849261011d6105d5565b92839186519161012c83610446565b87519061013882610446565b81845235905286519161014a8361042b565b81835286830191885161015c81610446565b81815283528352519052610735565b015115159051908152f35b80fd5b8383806003193601126100dd5761018e6105d5565b9281519061019b8261042b565b35815260203660231901126101d0576020936101ca9183516101bc81610446565b602435815286820152610735565b51908152f35b8280fd5b8383346100dd576020806003193601126101d05783356001600160a01b038116908190036102da57610204610541565b5061020d610541565b8185526005835260ff848620541660028110156102c7576001036102b75750835260058152818320825190610241826103fa565b805460ff811660028110156102a457835260081c60ff161515838301526001015483820152905b825193825190600282101561029157818652828401511515838701528385015185870152606086f35b634e487b7160e01b815260218752602490fd5b634e487b7160e01b875260218852602487fd5b9190508382528381830152610268565b634e487b7160e01b865260218752602486fd5b8380fd5b5050346100dd57816003193601126100dd576020906003549051908152f35b839150346100dd57816003193601126100dd57610318610560565b5060036103236105d5565b92540361035f576101008361035d8185602061034e610340610484565b82808251830101910161063a565b01519384910152518092610376565bf35b602490600784519163100960cb60e01b8352820152fd5b6020608060e0928051855282808201518051828801520151604086015282604082015180516060880152015182860152606081015160a08601520151805160c08501520151910152565b90600182811c921680156103f0575b60208310146103da57565b634e487b7160e01b600052602260045260246000fd5b91607f16916103cf565b606081019081106001600160401b0382111761041557604052565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761041557604052565b602081019081106001600160401b0382111761041557604052565b601f909101601f19168101906001600160401b0382119082101761041557604052565b6040519060008260025491610498836103c0565b80835260019380851690811561052057506001146104c0575b506104be92500383610461565b565b600260009081527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace94602093509091905b8183106105085750506104be9350820101386104b1565b855488840185015294850194879450918301916104f1565b90506104be94506020925060ff191682840152151560051b820101386104b1565b6040519061054e826103fa565b60006040838281528260208201520152565b60408051919060a083016001600160401b0381118482101761041557815260808360009283825280516105928161042b565b848152846020820152602083015280516105ab8161042b565b8481528460208201528183015283606083015251926105c98461042b565b80845260208401520152565b604051906105e2826103fa565b81600081526000602082015260406105f8610560565b910152565b919082604091031261063557604080519081016001600160401b03811182821017610415576040526020808294805184520151910152565b600080fd5b808203916101e083126106355760408051939091906001600160401b0390610100908187018381118882101761041557855285516001600160a01b0381168103610635578752601f1901126106355782519160a0830191821183831017610415576106dd918452602085015183526106b4818587016105fd565b60208401526106c681608087016105fd565b8484015260c0850151606084015260e085016105fd565b60808201526020840152610120820151908301526101408101516060830152610160810151908115158203610635576101c091608084015261018081015160a08401526101a081015160c0840152015160e082015290565b9060049060ff825416610d55576040918251338152845191602092838301527f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b860608488019384515188820152a1600360005403610d3e57845194600096600297885497866107a38a6103c0565b918281528181019260019b8c81169081600014610d245750600114610ce2575b506107d3816107dd950382610461565b805101019061063a565b90518015908115610cd7575b5015610cc057608081015115610cba5760005b15610ca35783515115610c8c578351513403610c755760608101958651431015610c5e5785600091338352600582528483208a60ff198254161790558651518a86852001557f3754f62329e2318343c7c16de4c66432f2e9511b0e12cb2df350b5638a7c0435828651858152a1015281516001600160401b0396909490610120860188811187821017610c4957845260008652610897610560565b878701526000848701526000606087015260006080870152600060a0870152600060c087015260e086019060008252600061010088015260018060a01b0384511687528784015188880152848401518588015251606087015260a083015189810190818111610c345781106106355760a087015260c083015192825151840193848111610c345784106106355760e0918460c089015243905201519051510190816101008601528285015111600014610b9457508051610100810181811087821117610b7f5782526000815260e09061096e610560565b868201526000838201526000606082015260006080820152600060a0820152600060c082015260008282015261010060018060a01b0386511695868352878101518884015284810151858401526060810151606084015260808101511515608084015260a081015160a084015260c081015160c0840152015182820152600360005543885582519486860152610a0a8682015184870190610376565b8281015161014086015260608101516101608601526080810151151561018086015260a08101516101a086015260c08101516101c086015201516101e09081850152835261020083019083821086831117610b6a57528151938411610b555750610a7485546103c0565b601f8111610b1a575b5081601f8411600114610ab75750928293918392600094610aac575b50501b916000199060031b1c1916179055565b015192503880610a99565b919083601f1981168760005284600020946000905b88838310610b005750505010610ae7575b505050811b019055565b015160001960f88460031b161c19169055388080610add565b858701518855909601959485019487935090810190610acc565b610b45908660005283600020601f860160051c810191858710610b4b575b601f0160051c0190610d6d565b38610a7d565b9091508190610b38565b604190634e487b7160e01b6000525260246000fd5b604183634e487b7160e01b6000525260246000fd5b604184634e487b7160e01b6000525260246000fd5b92519596959394509260009283925082918291906001600160a01b0316828215610c2b575bf115610c2157506000805560008355610bd282546103c0565b9081610bdf575b50505050565b600093601f8311600114610bfb57505050555b38808080610bd9565b8492610c1791858552601f848620920160051c82019101610d6d565b8120915555610bf2565b513d6000823e3d90fd5b506108fc610bb9565b601187634e487b7160e01b6000525260246000fd5b604186634e487b7160e01b6000525260246000fd5b825163100960cb60e01b8152601281860152602490fd5b815163100960cb60e01b8152601181850152602490fd5b815163100960cb60e01b8152601081850152602490fd5b815163100960cb60e01b8152600f81850152602490fd5b866107fc565b815163100960cb60e01b8152600e81850152602490fd5b9050875414386107e9565b90919293508b60005282600020908b6000925b828410610d0e57505050810182019291906107d36107c3565b80548585018701528b95909301928d9101610cf5565b60ff1916855250151560051b8101820193506107d36107c3565b602490600d86519163100960cb60e01b8352820152fd5b60405163100960cb60e01b8152600c81840152602490fd5b818110610d78575050565b60008155600101610d6d56fea164736f6c6343000810000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 5347,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:105:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:81:61:after expr stmt semicolon',
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
