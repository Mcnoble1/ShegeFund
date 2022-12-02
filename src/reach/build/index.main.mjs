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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc4 = stdlib.T_Object({
    creator: ctc1,
    deadline: ctc2,
    picture: ctc3,
    story: ctc1,
    target: ctc2,
    title: ctc1
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc2
    });
  const map0_ctc = ctc7;
  
  
  const Info_details = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v332, v333, v334, v337, v338, v351, v352, v353, v357] = svs;
      return (await ((async () => {
        
        
        return v334;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        details: {
          decode: Info_details,
          dom: [],
          rng: ctc4
          }
        }
      },
    views: {
      3: [ctc0, ctc0, ctc4, ctc2, ctc2, ctc5, ctc2, ctc2, ctc2]
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
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc6 = stdlib.T_Object({
    creator: ctc4,
    deadline: ctc1,
    picture: ctc5,
    story: ctc4,
    target: ctc1,
    title: ctc4
    });
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v332, v333, v334, v337, v338, v351, v352, v353, v357] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc6, ctc1, ctc1, ctc7, ctc1, ctc1, ctc1]);
  const v363 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:67:35:application call to [unknown function] (defined at: ./index.rsh:67:35:function exp)', 'at ./index.rsh:67:35:application call to [unknown function] (defined at: ./index.rsh:67:35:function exp)'],
    msg: 'in',
    who: 'Donor_donate'
    });
  const v364 = v363[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v368 = v351 ? false : true;
  stdlib.assert(v368, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:69:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:35:application call to [unknown function] (defined at: ./index.rsh:67:35:function exp)', 'at ./index.rsh:67:35:application call to [unknown function] (defined at: ./index.rsh:67:35:function exp)'],
    msg: 'Fundraising started',
    who: 'Donor_donate'
    });
  const v370 = stdlib.gt(v364, stdlib.checkedBigNumberify('./index.rsh:70:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v370, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:70:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:35:application call to [unknown function] (defined at: ./index.rsh:67:35:function exp)', 'at ./index.rsh:67:35:application call to [unknown function] (defined at: ./index.rsh:67:35:function exp)'],
    msg: 'Must donate more than 0',
    who: 'Donor_donate'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v332, v333, v334, v337, v338, v351, v352, v353, v357, v363],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v364, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v383], secs: v385, time: v384, didSend: v238, from: v382 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Donor_donate"
        });
      const v387 = v383[stdlib.checkedBigNumberify('./index.rsh:67:14:spread', stdlib.UInt_max, '0')];
      const v388 = stdlib.safeMul(v387, stdlib.checkedBigNumberify('./index.rsh:68:39:decimal', stdlib.UInt_max, '5'));
      const v389 = stdlib.safeDiv(v388, stdlib.checkedBigNumberify('./index.rsh:68:41:decimal', stdlib.UInt_max, '100'));
      const v395 = stdlib.add(v357, v387);
      sim_r.txns.push({
        amt: v387,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 0, v382, v387);
      const v406 = null;
      const v407 = await txn1.getOutput('Donor_donate', 'v406', ctc0, v406);
      
      const v418 = stdlib.sub(v395, v389);
      sim_r.txns.push({
        kind: 'from',
        to: v333,
        tok: undefined /* Nothing */
        });
      const v419 = stdlib.safeAdd(v353, v387);
      const v420 = stdlib.safeAdd(v352, stdlib.checkedBigNumberify('./index.rsh:78:65:decimal', stdlib.UInt_max, '1'));
      const v484 = false;
      const v485 = v420;
      const v486 = v419;
      const v488 = v418;
      const v489 = stdlib.lt(v419, v337);
      if (v489) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v332,
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
    tys: [ctc3, ctc3, ctc6, ctc1, ctc1, ctc7, ctc1, ctc1, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v383], secs: v385, time: v384, didSend: v238, from: v382 } = txn1;
  undefined /* setApiDetails */;
  const v387 = v383[stdlib.checkedBigNumberify('./index.rsh:67:14:spread', stdlib.UInt_max, '0')];
  const v388 = stdlib.safeMul(v387, stdlib.checkedBigNumberify('./index.rsh:68:39:decimal', stdlib.UInt_max, '5'));
  const v389 = stdlib.safeDiv(v388, stdlib.checkedBigNumberify('./index.rsh:68:41:decimal', stdlib.UInt_max, '100'));
  const v390 = v351 ? false : true;
  stdlib.assert(v390, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:69:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:35:application call to [unknown function] (defined at: ./index.rsh:67:35:function exp)', 'at ./index.rsh:67:35:application call to [unknown function] (defined at: ./index.rsh:67:35:function exp)'],
    msg: 'Fundraising started',
    who: 'Donor_donate'
    });
  const v392 = stdlib.gt(v387, stdlib.checkedBigNumberify('./index.rsh:70:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v392, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:70:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:35:application call to [unknown function] (defined at: ./index.rsh:67:35:function exp)', 'at ./index.rsh:67:35:application call to [unknown function] (defined at: ./index.rsh:67:35:function exp)'],
    msg: 'Must donate more than 0',
    who: 'Donor_donate'
    });
  const v395 = stdlib.add(v357, v387);
  ;
  const v405 = stdlib.lt(v384, v338);
  stdlib.assert(v405, {
    at: './index.rsh:72:24:application',
    fs: ['at ./index.rsh:71:32:application call to [unknown function] (defined at: ./index.rsh:71:32:function exp)'],
    msg: 'donation period over',
    who: 'Donor_donate'
    });
  await stdlib.mapSet(map0, v382, v387);
  const v406 = null;
  const v407 = await txn1.getOutput('Donor_donate', 'v406', ctc0, v406);
  if (v238) {
    stdlib.protect(ctc0, await interact.out(v383, v407), {
      at: './index.rsh:67:15:application',
      fs: ['at ./index.rsh:67:15:application call to [unknown function] (defined at: ./index.rsh:67:15:function exp)', 'at ./index.rsh:74:20:application call to "ret" (defined at: ./index.rsh:71:32:function exp)', 'at ./index.rsh:71:32:application call to [unknown function] (defined at: ./index.rsh:71:32:function exp)'],
      msg: 'out',
      who: 'Donor_donate'
      });
    }
  else {
    }
  
  const v418 = stdlib.sub(v395, v389);
  ;
  const v419 = stdlib.safeAdd(v353, v387);
  const v420 = stdlib.safeAdd(v352, stdlib.checkedBigNumberify('./index.rsh:78:65:decimal', stdlib.UInt_max, '1'));
  const v484 = false;
  const v485 = v420;
  const v486 = v419;
  const v488 = v418;
  const v489 = stdlib.lt(v419, v337);
  if (v489) {
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
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc5 = stdlib.T_Object({
    creator: ctc3,
    deadline: ctc1,
    picture: ctc4,
    story: ctc3,
    target: ctc1,
    title: ctc3
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v322 = stdlib.protect(ctc5, interact.createFundraiser, 'for Fundraiser\'s interact field createFundraiser');
  const v329 = stdlib.protect(ctc6, interact.platformAddr, 'for Fundraiser\'s interact field platformAddr');
  
  const txn1 = await (ctc.sendrecv({
    args: [v329, v322],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:52:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v333, v334], secs: v336, time: v335, didSend: v35, from: v332 } = txn1;
      
      ;
      const v337 = v334.target;
      const v338 = v334.deadline;
      const v349 = await ctc.getContractInfo();
      
      const v351 = false;
      const v352 = stdlib.checkedBigNumberify('./index.rsh:63:74:decimal', stdlib.UInt_max, '0');
      const v353 = stdlib.checkedBigNumberify('./index.rsh:63:71:decimal', stdlib.UInt_max, '0');
      const v354 = v335;
      const v357 = stdlib.checkedBigNumberify('./index.rsh:45:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v360 = stdlib.lt(v353, v337);
        
        return v360;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v332,
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
    tys: [ctc6, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v333, v334], secs: v336, time: v335, didSend: v35, from: v332 } = txn1;
  ;
  const v337 = v334.target;
  const v338 = v334.deadline;
  const v349 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.launched(v349), {
    at: './index.rsh:58:33:application',
    fs: ['at ./index.rsh:58:33:application call to [unknown function] (defined at: ./index.rsh:58:33:function exp)', 'at ./index.rsh:58:33:application call to "liftedInteract" (defined at: ./index.rsh:58:33:application)'],
    msg: 'launched',
    who: 'Fundraiser'
    });
  
  let v351 = false;
  let v352 = stdlib.checkedBigNumberify('./index.rsh:63:74:decimal', stdlib.UInt_max, '0');
  let v353 = stdlib.checkedBigNumberify('./index.rsh:63:71:decimal', stdlib.UInt_max, '0');
  let v354 = v335;
  let v357 = stdlib.checkedBigNumberify('./index.rsh:45:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v360 = stdlib.lt(v353, v337);
    
    return v360;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v383], secs: v385, time: v384, didSend: v238, from: v382 } = txn3;
    undefined /* setApiDetails */;
    const v387 = v383[stdlib.checkedBigNumberify('./index.rsh:67:14:spread', stdlib.UInt_max, '0')];
    const v388 = stdlib.safeMul(v387, stdlib.checkedBigNumberify('./index.rsh:68:39:decimal', stdlib.UInt_max, '5'));
    const v389 = stdlib.safeDiv(v388, stdlib.checkedBigNumberify('./index.rsh:68:41:decimal', stdlib.UInt_max, '100'));
    const v390 = v351 ? false : true;
    stdlib.assert(v390, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:69:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:35:application call to [unknown function] (defined at: ./index.rsh:67:35:function exp)', 'at ./index.rsh:67:35:application call to [unknown function] (defined at: ./index.rsh:67:35:function exp)'],
      msg: 'Fundraising started',
      who: 'Fundraiser'
      });
    const v392 = stdlib.gt(v387, stdlib.checkedBigNumberify('./index.rsh:70:25:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v392, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:70:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:35:application call to [unknown function] (defined at: ./index.rsh:67:35:function exp)', 'at ./index.rsh:67:35:application call to [unknown function] (defined at: ./index.rsh:67:35:function exp)'],
      msg: 'Must donate more than 0',
      who: 'Fundraiser'
      });
    const v395 = stdlib.add(v357, v387);
    ;
    const v405 = stdlib.lt(v384, v338);
    stdlib.assert(v405, {
      at: './index.rsh:72:24:application',
      fs: ['at ./index.rsh:71:32:application call to [unknown function] (defined at: ./index.rsh:71:32:function exp)'],
      msg: 'donation period over',
      who: 'Fundraiser'
      });
    await stdlib.mapSet(map0, v382, v387);
    const v406 = null;
    await txn3.getOutput('Donor_donate', 'v406', ctc0, v406);
    stdlib.protect(ctc0, await interact.seeDonation(v382, v387), {
      at: './index.rsh:75:48:application',
      fs: ['at ./index.rsh:75:48:application call to [unknown function] (defined at: ./index.rsh:75:48:function exp)', 'at ./index.rsh:75:48:application call to "liftedInteract" (defined at: ./index.rsh:75:48:application)', 'at ./index.rsh:71:32:application call to [unknown function] (defined at: ./index.rsh:71:32:function exp)'],
      msg: 'seeDonation',
      who: 'Fundraiser'
      });
    
    stdlib.protect(ctc0, await interact.thankDonor(v382), {
      at: './index.rsh:76:47:application',
      fs: ['at ./index.rsh:76:47:application call to [unknown function] (defined at: ./index.rsh:76:47:function exp)', 'at ./index.rsh:76:47:application call to "liftedInteract" (defined at: ./index.rsh:76:47:application)', 'at ./index.rsh:71:32:application call to [unknown function] (defined at: ./index.rsh:71:32:function exp)'],
      msg: 'thankDonor',
      who: 'Fundraiser'
      });
    
    const v418 = stdlib.sub(v395, v389);
    ;
    const v419 = stdlib.safeAdd(v353, v387);
    const v420 = stdlib.safeAdd(v352, stdlib.checkedBigNumberify('./index.rsh:78:65:decimal', stdlib.UInt_max, '1'));
    const cv351 = false;
    const cv352 = v420;
    const cv353 = v419;
    const cv354 = v384;
    const cv357 = v418;
    
    v351 = cv351;
    v352 = cv352;
    v353 = cv353;
    v354 = cv354;
    v357 = cv357;
    
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
    pure: [`Info_details()(byte[64],uint64,byte[256],byte[64],uint64,byte[64])`],
    sigs: [`Donor_donate(uint64)byte[0]`, `Info_details()(byte[64],uint64,byte[256],byte[64],uint64,byte[64])`]
    },
  GlobalNumByteSlice: 6,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByAIAAEDQNAD9cn3rQ8CBSYGAQABAQABAgEDAQQiNQAxGEECaSpkSSJbNQGBCFs1AjEZIxJBAAoxACiBCa9mQgI1NhoAF0lBAEAiNQQjNQZJIQUMQAAKIQUSRDYaAUIAQYHhlYSDChJENAEkEkQoZClkUCtkUCcEZFAnBWRQSTUDJSEEWDUHQgH8NhoCFzUENhoDNhoBF0khBgxAAMkhBhJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQK2RQJwRkUCcFZFBJNQNJVyAgNf+BmARbNf5JNQU1/YAEHIZP5TT9ULA0/RdJNfwhBwuBZAo1+zQDgaAEI1gXFEQ0/CINRDT8iAGqMgY0/gxEMQAoKTT8FlBmgAgAAAAAAAABlrAqNQexIrIBNPuyCCOyEDT/sgezNANXACA0/zQDJSEEWDQDgZAEWzT+IjQDgaEEWyMINAOBqQRbNPwIMgY0A4GxBFs0/Ag0+wlCAE8iEkSBoI0GiAE7IjQBEkQ0BEkiEkw0AhIRREk1BUlXACA1/4EgIQRYNf6ABHyNSM00/1A0/lCwMQA0/zT+SYGIA1s0/iVbIiIiMgYiQgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY0/TT5DEEAWTT2NPdQNPhQNPkWUDT6FlA0+xZRBwhQNPwWUDT9FlA0/xZQKEsBVwB/ZylLAVd/f2crSwFX/n9nJwRLAYH9AoF/WGcnBUsBgfwDgT1YZ0gkNQEyBjUCQgAvsSKyATT/sggjshA09rIHs0IAADEZIQcSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBBjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 5,
  stateSize: 569,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_creator","type":"tuple"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"}],"internalType":"struct T2","name":"_picture","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_story","type":"tuple"},{"internalType":"uint256","name":"_target","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_title","type":"tuple"}],"internalType":"struct T3","name":"elem2","type":"tuple"}],"internalType":"struct T8","name":"v497","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_creator","type":"tuple"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"}],"internalType":"struct T2","name":"_picture","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_story","type":"tuple"},{"internalType":"uint256","name":"_target","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_title","type":"tuple"}],"internalType":"struct T3","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v406","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v492","type":"uint256"}],"name":"Donor_donate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Info_details","outputs":[{"components":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_creator","type":"tuple"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"}],"internalType":"struct T2","name":"_picture","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_story","type":"tuple"},{"internalType":"uint256","name":"_target","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T1","name":"_title","type":"tuple"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v504","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x620017f638819003906080601f8301601f1916810191906001600160401b038311908310176200056f5782916040526080398061024081126200069257604051906200004b8262000697565b608051825260a0516001600160a01b038116810362000692576020830152610200603f1982011262000692576040519060c08201906001600160401b038211838310176200056f5761010091604052620000ad856080016040608001620006b3565b8352610100516020840152609f1901126200069257604051926101008401906001600160401b038211858310176200056f5760409182526101205185526101408051602087015261016051868401526101805160608701526101a0516080878101919091526101c05160a08801526101e05160c08801526102005160e088015292840195909552620001659162000149908201610220620006b3565b60608401526102605160808085019190915201610280620006b3565b60a082015260408201526000805543600355604051620001858162000697565b600081526000602082015260406200019c62000717565b91015260ff6004541662000679577f71e17983e9aa0c7e49dd5b0df4e367390616e64dbfa21d751d991bfdd596d5d86102606040513381528351602082015260018060a01b0360208501511660408201526200020160408501516060830190620007cd565ba1805180159081156200066c575b50156200065357346200063a57604051916001600160401b03818401908111908411176200056f57820160405260008252600060208301526200025162000717565b60408301526000606083015260006080830152600060a0830152600060c0830152600060e08301526000610100830152600061012083015233825260018060a01b036020820151166020830152604081015160408301526020604060808184015101519283606086015201510151608083015243610100830152151560001462000585576040516001600160401b036101208201908111908211176200056f5780610120610100920160405260008152600060208201526200031262000717565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015261012060018060a01b038451169384835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a0810151151560a084015260c081015160c084015260e081015160e084015201518282015260036000554360015560405192602084015260018060a01b036020820151166040840152620003df60408201516060850190620007cd565b6060810151610260840152608081015161028084015260a081015115156102a084015260c08101516102c084015260e08101516102e0840152015161030080830191909152815261032081016001600160401b038111828210176200056f5760405280516001600160401b0381116200056f576200045f6002546200086f565b601f811162000521575b50602091601f8211600114620004b757918192600092620004ab575b50508160011b916000199060031b1c1916176002555b604051610f109081620008c68239f35b01519050388062000485565b601f19821692600260005260206000209160005b8581106200050857508360019510620004ee575b505050811b016002556200049b565b015160001960f88460031b161c19169055388080620004df565b91926020600181928685015181550194019201620004cb565b60026000526200055d90600080516020620017d6833981519152601f840160051c8101916020851062000564575b601f0160051c0190620008ac565b3862000469565b90915081906200054f565b634e487b7160e01b600052604160045260246000fd5b50600080808080336108fcf1156200062e57600080556000600155620005ad6002546200086f565b80620005bb575b506200049b565b601f8111600114620005d5575060006002555b38620005b4565b60026000526200061d90601f0160051c600080516020620017d6833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf620008ac565b6000602081208160025555620005ce565b6040513d6000823e3d90fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b905060015414386200020f565b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b606081019081106001600160401b038211176200056f57604052565b91908260409103126200069257604080519081016001600160401b038111828210176200056f576040526020808294805184520151910152565b60408051919082016001600160401b038111838210176200056f5760405260006020838281520152565b604080516001600160401b03929160c08201848111838210176200056f578152819362000743620006ed565b835260009182602085015280519161010083019083821090821117620007b957815282825282602083015282818301528260608301528260808301528260a08301528260c08301528260e08301528301526200079e620006ed565b6060830152608082015260a0620007b4620006ed565b910152565b634e487b7160e01b84526041600452602484fd5b6101e09060a0815191825185526020809301518386015282810151604086015260e0604082015180516060880152848101516080880152604081015184880152606081015160c08801526080810151828801528381015161010088015260c081015161012088015201516101408601528260608201518051610160880152015161018086015260808101516101a0860152015180516101c08501520151910152565b90600182811c92168015620008a1575b60208310146200088b57565b634e487b7160e01b600052602260045260246000fd5b91607f16916200087f565b818110620008b8575050565b60008155600101620008ac56fe6040608081526004908136101561001d575b5050361561001b57005b005b600091823560e01c90816316674bfa146102fd5781631e93b0f1146102de57816336e56ea5146101d457816346ff359c1461017957816363de7eed146100ff5750806383230757146100e15763ab53f2c60361001157346100dd57816003193601126100dd57815461008d6104b9565b91805193849283526020828185015284518093850152815b8381106100c657505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016100a5565b5080fd5b50346100dd57816003193601126100dd576020906001549051908152f35b828460203660031901126101765760209261016b849261011d610663565b92839186519161012c8361049e565b8751906101388261049e565b81845235905286519161014a83610483565b81835286830191885161015c8161049e565b81815283528352519052610853565b015115159051908152f35b80fd5b8383806003193601126100dd5761018e610663565b9281519061019b82610483565b35815260203660231901126101d0576020936101ca9183516101bc8161049e565b602435815286820152610853565b51908152f35b8280fd5b8383346100dd576020806003193601126101d05783356001600160a01b038116908190036102da5761020461056e565b5061020d61056e565b8185526005835260ff848620541660028110156102c7576001036102b7575083526005815281832082519061024182610452565b805460ff811660028110156102a457835260081c60ff161515838301526001015483820152905b825193825190600282101561029157818652828401511515838701528385015185870152606086f35b634e487b7160e01b815260218752602490fd5b634e487b7160e01b875260218852602487fd5b9190508382528381830152610268565b634e487b7160e01b865260218752602486fd5b8380fd5b5050346100dd57816003193601126100dd576020906003549051908152f35b839150346100dd57816003193601126100dd5761031861058d565b506003610323610663565b92540361035f576102008361035d81858161034e61033f6104b9565b602080825183010191016106dc565b01519384910152518092610376565bf35b602490600784519163100960cb60e01b8352820152fd5b6101e09060a0815191825185526020809301518386015282810151604086015260e0604082015180516060880152848101516080880152604081015184880152606081015160c08801526080810151828801528381015161010088015260c081015161012088015201516101408601528260608201518051610160880152015161018086015260808101516101a0860152015180516101c08501520151910152565b90600182811c92168015610448575b602083101461043257565b634e487b7160e01b600052602260045260246000fd5b91607f1691610427565b606081019081106001600160401b0382111761046d57604052565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761046d57604052565b602081019081106001600160401b0382111761046d57604052565b6040519060006002546104cb81610418565b80855260019180831690811561054f5750600114610509575b5050829003601f01601f191682016001600160401b0381118382101761046d57604052565b60026000908152602093509183600080516020610ee48339815191525b83851061053b575050505083010138806104e4565b805488860183015293019284908201610526565b919250506020925060ff191682850152151560051b83010138806104e4565b6040519061057b82610452565b60006040838281528260208201520152565b604080516001600160401b03929160c0820191908483118284101761046d5782815281946105ba84610483565b6000938481528460e085015283528360208401528151906101008201908282109082111761064f5790829160a0949352848152846020820152848282015284606082015284608082015284848201528460c08201528460e082015281830152805161062481610483565b8481528460208201526060830152836080830152519261064384610483565b80845260208401520152565b634e487b7160e01b85526041600452602485fd5b6040519061067082610452565b816000815260006020820152604061068661058d565b910152565b51906001600160a01b038216820361069f57565b600080fd5b919082604091031261069f57604080519081016001600160401b0381118282101761046d576040526020808294805184520151910152565b80820390610300821261069f57604080519361012091906001600160401b03908387018281118882101761046d5783526107158561068b565b87526107236020860161068b565b602088015261020080603f1988011261069f5783519460c086018681108582111761046d578552610756838689016106a4565b8652608087015160208701526101008098609f19011261069f57845190888201948286109086111761046d576107fd94865260a0880151825260c0880151602083015260e088015186830152888801516060830152870151608082015261014087015160a082015261016087015160c082015261018087015160e0820152848601526107e6826101a088016106a4565b60608601526101e0860151608086015285016106a4565b60a08301528401526102408101516060840152610260810151608084015261028081015190811515820361069f576102e09160a08501526102a081015160c08501526102c081015160e085015201519082015290565b91906040516108618161049e565b6000815260ff60045416610eb3577f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b86060604051338152865160208201526020870151516040820152a1600360005403610e9a576108c061033f6104b9565b9184518015908115610e8e575b5015610e7557602085015151806000190460051181151516610deb576005810290600582040361069f5760649004825260a083015115610e6e5760005b15610e555760208501515115610e3c576020850151513403610e23576080830151431015610e0a5760206000913383526005825260408320600160ff19825416179055818701515160016040852001557fc8faafcf54f014ebfcdae9a661c5b1de8a1056ae579b99da5296c8feb484cefe82604051858152a10152600080808060018060a01b03602087015116855190828215610e01575bf115610dd6576040519361014085016001600160401b0381118682101761046d5760405260008552600060208601526109d961058d565b60408601526000606086015260006080860152600060a0860152600060c0860152600060e08601526000610100860152600061012086015260018060a01b03835116855260018060a01b03602084015116602086015260408301516040860152606083015160608601526080830151608086015260c08301516001810190818111610deb57811061069f5760c086015260e083015192602082015151840193848111610deb57841061069f576101006020918560e08901524382890152015191015151019051908181039283610120870152606086015111600014610d2e57505060405190506001600160401b0361012082019081119082111761046d578061012061010092016040526000815260006020820152610af661058d565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260008282015261012060018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a0810151151560a084015260c081015160c084015260e081015160e084015201518282015260036000554360015560405193602085015260018060a01b036020820151166040850152610bc160408201516060860190610376565b6060810151610260850152608081015161028085015260a081015115156102a085015260c08101516102c085015260e08101516102e0850152015161030080840191909152825261032082016001600160401b0381118382101761046d5760405281516001600160401b03811161046d57610c3d600254610418565b601f8111610ce6575b50602092601f8211600114610c835792819293600092610c78575b50508160011b916000199060031b1c191617600255565b015190503880610c61565b601f19821693600260005260206000209160005b868110610cce5750836001959610610cb5575b505050811b01600255565b015160001960f88460031b161c19169055388080610caa565b91926020600181928685015181550194019201610c97565b6002600052610d1e90600080516020610ee4833981519152601f840160051c81019160208510610d24575b601f0160051c0190610ecc565b38610c46565b9091508190610d11565b9351929360009384938493849391926001600160a01b031691849114610de2575bf115610dd657600080556000600155610d69600254610418565b80610d715750565b601f8111600114610d8457506000600255565b6002600052610dc990601f0160051c600080516020610ee4833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610ecc565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc610d4f565b634e487b7160e01b600052601160045260246000fd5b506108fc6109a2565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b600161090a565b60405163100960cb60e01b8152600d6004820152602490fd5b905060015414386108cd565b60405163100960cb60e01b8152600c6004820152602490fd5b60405163100960cb60e01b8152600b6004820152602490fd5b818110610ed7575050565b60008155600101610ecc56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 6134,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:84:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:63:61:after expr stmt semicolon',
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
