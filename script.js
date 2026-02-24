let totalcount = document.getElementById('total-count');
let interviewcount = document.getElementById('interview-count');
let rejectcount = document.getElementById('reject-count');
let available = document.getElementById('available');
let interviewlist = [];
let rejectlist = [];
let currentstatus = 'all';



const interviewonly = document.getElementById('interview-only');
const rejectonly = document.getElementById('reject-only');
const childcount = document.getElementById('cards');

function counting(filter = 'all') {
    totalcount.innerText = childcount.children.length;
    available.innerText = childcount.children.length;
    interviewcount.innerText = interviewlist.length;
    rejectcount.innerText = rejectlist.length;
    if (filter === 'interview') {
        available.innerText = `${interviewcount.innerText} of ${totalcount.innerText}`;
    } else if (filter === 'reject') {
        available.innerText = `${rejectcount.innerText} of ${totalcount.innerText}`;
    }
    else {
        available.innerText = `${totalcount.innerText}`;
    }
}
counting()

// togglig part
const allbtn = document.getElementById('all-btn');
const interviewbtn = document.getElementById('interview-btn');
const rejectbtn = document.getElementById('reject-btn');

function togglebtn(id) {
    allbtn.classList.remove('bg-sky-500', 'text-white')
    interviewbtn.classList.remove('bg-sky-500', 'text-white')
    rejectbtn.classList.remove('bg-sky-500', 'text-white')
    allbtn.classList.add('bg-white', 'text-gray-500')
    interviewbtn.classList.add('bg-white', 'text-gray-500')
    rejectbtn.classList.add('bg-white', 'text-gray-500')
    const selected = document.getElementById(id);
    currentstatus = id;
    selected.classList.remove('bg-white')
    selected.classList.add('bg-sky-500', 'text-white')
    counting()
    if (id == 'interview-btn') {
        childcount.classList.add('hidden');
        rejectonly.classList.add('hidden');
        interviewonly.classList.remove('hidden');
        renderInterview();
        counting('interview');
    }
    else if (id == 'all-btn') {
        childcount.classList.remove('hidden');
        interviewonly.classList.add('hidden');
        rejectonly.classList.add('hidden');
        renderall()
    }
    else if (id == 'reject-btn') {
        childcount.classList.add('hidden');
        rejectonly.classList.remove('hidden');
        interviewonly.classList.add('hidden');
        renderReject()
        counting('reject');
    }

}


// mainsection main main main
const main = document.querySelector("#alpha");
main.addEventListener('click', function (event) {
    const parentinfo = event.target.closest('.card');
    const company = parentinfo.querySelector('.company').innerText;
    const position = parentinfo.querySelector('.position').innerText;
    const salary = parentinfo.querySelector('.salary').innerText;
    const intro = parentinfo.querySelector('.intro').innerText;
    if (event.target.classList.contains('apply')) {
        const statusBtn = parentinfo.querySelector('.status');
        statusBtn.innerText = 'Interview';
        statusBtn.classList.remove('bg-blue-200', 'bg-red-500');
        statusBtn.classList.add('bg-green-500', 'text-white');
        const cardinfo = {
            company,
            position,
            salary,
            intro,
            status: 'Interview'
        };
        const exists = interviewlist.find(item => item.company === company);
        if (!exists) {
            interviewlist.push(cardinfo);
        }
        rejectlist = rejectlist.filter(item => item.company !== cardinfo.company)

        // for counting again
        if (currentstatus == "reject-btn") {

            renderReject()
        }

        counting();

    }
    else if (event.target.classList.contains('ignore')) {
        const statusBtn = parentinfo.querySelector('.status');
        statusBtn.innerText = 'Reject';
        statusBtn.classList.remove('bg-blue-200', 'bg-green-200');
        statusBtn.classList.add('bg-red-500', 'text-white');
        const cardinfo = {
            company,
            position,
            salary,
            intro,
            status: 'Reject'
        };
        const exists = rejectlist.find(item => item.company === company);

        if (!exists) {
            rejectlist.push(cardinfo);
        }
        interviewlist = interviewlist.filter(item => item.company !== cardinfo.company)
        if (currentstatus == "interview-btn") {

            renderInterview()
        }

        counting();
    }

    const deleteBtn = event.target.closest('.delete');
    if (deleteBtn) {
        parentinfo.remove();
        interviewlist = interviewlist.filter(item => item.company !== company);
        rejectlist = rejectlist.filter(item => item.company !== company);

        counting();
    }

});

function renderInterview() {
    interviewonly.innerHTML = '';
    if (interviewlist.length === 0) {
        interviewonly.innerHTML = `
            <div class="text-center mt-3 rounded-md bg-white py-10">
                <img src="jobs.png" class="mx-auto bg-white opacity-70">
                <p class="text-[#002C5C] font-semibold text-[24px] mt-4">No Jobs Available</p>
                <p class="text-gray-500">Check back soon for new job opportunities</p>
            </div>
        `;

        return;
    }
    for (let item of interviewlist) {

        let div = document.createElement('div');
        div.className = 'card bg-white p-6 mt-3 space-y-2 rounded-md';

        div.innerHTML = `
            <div class="flex justify-between">
                <h1 class="company text-[#002C5C] font-bold">${item.company}</h1>
                <button class="delete">
                    <img src="./Group 1.png" alt="">
                </button>
            </div>

            <p class="position text-gray-500">${item.position}</p>

            <p class="salary text-gray-500 py-3">${item.salary}</p>

            <button class="status bg-green-500 text-white py-2 px-3 rounded">
                ${item.status}
            </button>

            <p class="intro text-gray-700">${item.intro}</p>

            <div class="space-x-2 pt-3">
                <button class="apply text-green-500 border border-green-500 py-2 px-3 rounded">
                    interview
                </button>

                <button class="ignore text-red-500 border border-red-500 rounded py-2 px-3">
                    Rejected
                </button>
            </div>
        `;
        interviewonly.appendChild(div);
    } console.log();
}

// reject render
function renderReject() {

    rejectonly.innerHTML = '';
    if (rejectlist.length === 0) {
        rejectonly.innerHTML = `
            <div class="text-center mt-3 rounded-md bg-white py-10">
                <img src="jobs.png" class="mx-auto bg-white opacity-70">
                <p class="text-[#002C5C] font-semibold text-[24px] mt-4">No Jobs Available</p>
                <p class="text-gray-500">Check back soon for new job opportunities</p>
            </div>
        `;
        return;
    }
    for (let item of rejectlist) {
        const div = document.createElement('div');
        div.className = 'card bg-white p-6 mt-3 space-y-2 rounded-md';

        div.innerHTML = `
            <div class="flex justify-between">
                <h1 class="company text-[#002C5C] font-bold">${item.company}</h1>
                <button class="delete">
                    <img src="./Group 1.png" alt="">
                </button>
            </div>

            <p class="position text-gray-500">${item.position}</p>

            <p class="salary text-gray-500 py-3">${item.salary}</p>

            <button class="status bg-red-500 text-white py-2 px-3 rounded">
                ${item.status}
            </button>

            <p class="intro text-gray-700">${item.intro}</p>

            <div class="space-x-2 pt-3">
                <button class="apply text-green-500 border border-green-500 py-2 px-3 rounded">
                    interview
                </button>

                <button class="ignore  text-red-500 border border-red-500 rounded py-2 px-3">
                    Rejected
                </button>
            </div>
        `;
        rejectonly.appendChild(div);
    }
}
