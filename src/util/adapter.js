import isJson from 'is-json';
import moment from 'moment';

// import dictMap from 'util/dictMap';

const adapter = {};

// 基础信息的适配器
adapter.baseInfoAdapter = function (data) {
  // console.log(JSON.stringify(data));
  return {
    title: data.title, // 简历名称
    name: data.name, // true string 真实姓名
    sex: data.sex, // true string 性别
    birthday: data.birthday * 1000, // true string生日
    houseHold: isJson(data.household) ? JSON.parse(data.household) : [], // true string 籍贯
    address: isJson(data.address) ? JSON.parse(data.address) : [],
    street: data.street,
    phone: data.phone, // true string手机
    email: data.email // true string 邮箱
  };
};

// 期望工作适配器
adapter.expectedWorkAdapter = function (data) {
  // console.log(JSON.stringify(data));
  return {
    desiredPosition: data.desiredposition,
    expectedSalary: data.expectedsalary,
    expectedCity: data.expectedcity,
    workType: data.worktype,
    currentState: data.currentstate,
    timeToPost: data.timetopost
  };
};

adapter.educationAdapter = function (data) {
  // console.log(JSON.stringify(data));
  return {
    ...data,
    inSchoolTime: data.inschooltime * 1000,
    graduationTime: data.graduationtime * 1000,
    schoolName: data.schoolname,
    head: moment(data.inschooltime * 1000).format('YYYY年MM月') + ' - ' + moment(data.graduationtime * 1000).format('YYYY年MM月'),
    title: data.schoolname,
    info: data.education + ' / ' + data.major
  };
};

adapter.internshipAdapter = function (data) {
  return {
    ...data,
    startTime: data.starttime * 1000,
    endTime: data.endtime * 1000,
    companyName: data.companyname,
    jobContent: data.jobcontent,
    head: moment(data.starttime * 1000).format('YYYY年MM月') + ' - ' + moment(data.endtime * 1000).format('YYYY年MM月'),
    title: data.companyname + ' / ' + data.post,
    info: data.jobcontent ? data.jobcontent.replace(/\n|\r\n/g, '<br/>') : ''
  };
};

adapter.projectAdapter = function (data) {
  return {
    ...data,
    startTime: data.starttime * 1000,
    endTime: data.endtime * 1000,
    projectName: data.projectname,
    projectDesc: data.projectdesc,
    head: moment(data.starttime * 1000).format('YYYY年MM月') + ' - ' + moment(data.endtime * 1000).format('YYYY年MM月'),
    title: data.projectname + ' / ' + data.duty,
    info: data.projectdesc ? data.projectdesc.replace(/\n|\r\n/g, '<br/>') : ''
  };
};

adapter.jobAdapter = function (data) {
  return {
    ...data,
    startTime: data.starttime * 1000,
    endTime: data.endtime * 1000,
    companyName: data.companyname,
    jobContent: data.jobcontent,
    head: moment(data.starttime * 1000).format('YYYY年MM月') + ' - ' + moment(data.endtime * 1000).format('YYYY年MM月'),
    title: data.companyname + ' / ' + data.post,
    info: data.jobcontent ? data.jobcontent.replace(/\n|\r\n/g, '<br/>') : ''
  };
};

adapter.skillAdapter = function (data) {
  return {
    ...data,
    skillName: data.skillname,
    label: data.skillname,
    value: data.proficiency * 20
  };
};

adapter.honorAdapter = function (data) {
  data.reslist.forEach(r => {
    const urlAry = r.url.split('/');
    urlAry[urlAry.length - 1] = '450_' + urlAry[urlAry.length - 1];
    r.coverUrl = urlAry.join('/');
  });
  return {
    ...data,
    honorDate: data.honordate * 1000,
    honorDateText: moment(data.honordate * 1000).format('YYYY年MM月DD日')
    // desc: data.desc ? data.desc.replace(/\n|\r\n/g, '<br/>') : ''
  };
};
export default adapter;