const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const errorElement = document.querySelector("#error");
const securityStatusElement = document.querySelector("#securityStatus");
const loginClock = document.querySelector("#loginClock");
const openLoginButton = document.querySelector("#openLoginButton");
const loginCard = document.querySelector("#loginCard");
const loginOverlay = document.querySelector("#loginOverlay");
const currentDate = document.querySelector("#currentDate");
const currentTime = document.querySelector("#currentTime");
const statusMessage = document.querySelector("#statusMessage");
const dailyQuote = document.querySelector("#dailyQuote");
const dailyQuoteAuthor = document.querySelector("#dailyQuoteAuthor");
const averageFlightsValue = document.querySelector("#averageFlightsValue");
const averageFlightsNote = document.querySelector("#averageFlightsNote");
const averageOutgoingFlightsValue = document.querySelector("#averageOutgoingFlightsValue");
const averageOutgoingFlightsNote = document.querySelector("#averageOutgoingFlightsNote");
const averagePassengersValue = document.querySelector("#averagePassengersValue");
const averagePassengersNote = document.querySelector("#averagePassengersNote");
const averageOutgoingPassengersValue = document.querySelector("#averageOutgoingPassengersValue");
const averageOutgoingPassengersNote = document.querySelector("#averageOutgoingPassengersNote");
const currencyExchangeStatus = document.querySelector("#currencyExchangeStatus");
const currencyExchangePanelNote = document.querySelector("#currencyExchangePanelNote");
const currencyExchangeList = document.querySelector("#currencyExchangeList");
const currencyExchangeEditor = document.querySelector("#currencyExchangeEditor");
const currencyExchangeEditActions = document.querySelector("#currencyExchangeEditActions");
const currencyExchangeDebug = document.querySelector("#currencyExchangeDebug");
const currencyExchangeRawText = document.querySelector("#currencyExchangeRawText");
const addCurrencyRowButton = document.querySelector("#addCurrencyRowButton");
const saveCurrencyExchangeButton = document.querySelector("#saveCurrencyExchangeButton");
const staffOnDutyName = document.querySelector("#staffOnDutyName");
const staffAttendanceTime = document.querySelector("#staffAttendanceTime");
const staffDutyToggle = document.querySelector("#staffDutyToggle");
const assignedTaskCount = document.querySelector("#assignedTaskCount");
const assignedTaskPreview = document.querySelector("#assignedTaskPreview");
const assignedTaskNote = document.querySelector("#assignedTaskNote");
const notificationPanel = document.querySelector("#notificationPanel");
const notificationBoard = document.querySelector("#notificationBoard");
const clearNotificationsButton = document.querySelector("#clearNotificationsButton");
const doneTaskCount = document.querySelector("#doneTaskCount");
const pendingTaskCount = document.querySelector("#pendingTaskCount");
const doneTaskPreview = document.querySelector("#doneTaskPreview");
const pendingTaskPreview = document.querySelector("#pendingTaskPreview");
const heroTaskRow = document.querySelector("#heroTaskRow");
const quickSidebar = document.querySelector("#quickSidebar");
const quickSidebarHandle = document.querySelector("#quickSidebarHandle");
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskAssignee = document.querySelector("#taskAssignee");
const taskBoard = document.querySelector("#taskBoard");
const openTaskTrackerButton = document.querySelector("#openTaskTrackerButton");
const taskTrackerOverlay = document.querySelector("#taskTrackerOverlay");
const taskTrackerPanel = document.querySelector("#taskTrackerPanel");
const closeTaskTrackerButton = document.querySelector("#closeTaskTrackerButton");
const openMeetingScheduleButton = document.querySelector("#openMeetingScheduleButton");
const meetingScheduleOverlay = document.querySelector("#meetingScheduleOverlay");
const meetingSchedulePanel = document.querySelector("#meetingSchedulePanel");
const closeMeetingScheduleButton = document.querySelector("#closeMeetingScheduleButton");
const openCurrencyExchangeButton = document.querySelector("#openCurrencyExchangeButton");
const currencyExchangeOverlay = document.querySelector("#currencyExchangeOverlay");
const currencyExchangePanel = document.querySelector("#currencyExchangePanel");
const closeCurrencyExchangeButton = document.querySelector("#closeCurrencyExchangeButton");
const openPassengerCalculatorButton = document.querySelector("#openPassengerCalculatorButton");
const passengerCalculatorOverlay = document.querySelector("#passengerCalculatorOverlay");
const passengerCalculatorPanel = document.querySelector("#passengerCalculatorPanel");
const closePassengerCalculatorButton = document.querySelector("#closePassengerCalculatorButton");
const printPassengerCalculatorButton = document.querySelector("#printPassengerCalculatorButton");
const passengerCalculatorForm = document.querySelector("#passengerCalculatorForm");
const calculatorPassengerName = document.querySelector("#calculatorPassengerName");
const calculatorFlightNumber = document.querySelector("#calculatorFlightNumber");
const calculatorCommodity = document.querySelector("#calculatorCommodity");
const calculatorCurrency = document.querySelector("#calculatorCurrency");
const calculatorCommodityValue = document.querySelector("#calculatorCommodityValue");
const calculatorExchangeRate = document.querySelector("#calculatorExchangeRate");
const calculatorDutyRate = document.querySelector("#calculatorDutyRate");
const calculatorExciseTax = document.querySelector("#calculatorExciseTax");
const calculatorSurcharge = document.querySelector("#calculatorSurcharge");
const calculatorDutiableValue = document.querySelector("#calculatorDutiableValue");
const calculatorCustomsDuties = document.querySelector("#calculatorCustomsDuties");
const calculatorCdsDst = document.querySelector("#calculatorCdsDst");
const calculatorImportProcessingCharge = document.querySelector("#calculatorImportProcessingCharge");
const calculatorLandedCost = document.querySelector("#calculatorLandedCost");
const calculatorExciseTaxDisplay = document.querySelector("#calculatorExciseTaxDisplay");
const calculatorVat = document.querySelector("#calculatorVat");
const calculatorSummaryCustomsDuties = document.querySelector("#calculatorSummaryCustomsDuties");
const calculatorSummaryVat = document.querySelector("#calculatorSummaryVat");
const calculatorSummaryImportProcessingCharge = document.querySelector("#calculatorSummaryImportProcessingCharge");
const calculatorSummaryCdsDst = document.querySelector("#calculatorSummaryCdsDst");
const calculatorSummaryExciseTax = document.querySelector("#calculatorSummaryExciseTax");
const calculatorSummarySurcharge = document.querySelector("#calculatorSummarySurcharge");
const calculatorAmountDue = document.querySelector("#calculatorAmountDue");
const calculatorSummary = document.querySelector("#calculatorSummary");
const calculatorPrintTimestamp = document.querySelector("#calculatorPrintTimestamp");
const printPassengerName = document.querySelector("#printPassengerName");
const printFlightNumber = document.querySelector("#printFlightNumber");
const printCommodity = document.querySelector("#printCommodity");
const printCurrencyUsed = document.querySelector("#printCurrencyUsed");
const printCommodityValue = document.querySelector("#printCommodityValue");
const printExchangeRate = document.querySelector("#printExchangeRate");
const printDutyRate = document.querySelector("#printDutyRate");
const printSurchargeStatus = document.querySelector("#printSurchargeStatus");
const meetingForm = document.querySelector("#meetingForm");
const meetingTitle = document.querySelector("#meetingTitle");
const meetingDate = document.querySelector("#meetingDate");
const meetingTime = document.querySelector("#meetingTime");
const meetingPlace = document.querySelector("#meetingPlace");
const meetingBoard = document.querySelector("#meetingBoard");
const messengerPanel = document.querySelector("#messengerPanel");
const messengerClose = document.querySelector("#messengerClose");
const messengerStatus = document.querySelector("#messengerStatus");
const messengerThread = document.querySelector("#messengerThread");
const messengerForm = document.querySelector("#messengerForm");
const messengerRecipient = document.querySelector("#messengerRecipient");
const messengerInput = document.querySelector("#messengerInput");
const workspaceOverlay = document.querySelector("#workspaceOverlay");
const workspacePanel = document.querySelector("#workspacePanel");
const workspaceTitle = document.querySelector("#workspaceTitle");
const workspaceFrame = document.querySelector("#workspaceFrame");
const closeWorkspaceButton = document.querySelector("#closeWorkspaceButton");
const workspaceButtons = document.querySelectorAll("[data-workspace-url]");
const logoutButton = document.querySelector("#logoutButton");
const topbar = document.querySelector(".topbar");
const taskStorageKey = "officePortalTasks";
const currencyExchangeStorageKey = "officePortalCurrencyExchangeRates";
const currencyExchangeDraftKey = "officePortalCurrencyExchangeDraftRates";
const currencyExchangeResetKey = "officePortalCurrencyExchangeResetV1";

const knownCurrencyPatterns = [
  { code: "USD", pattern: /(?:USD|US\s*DOLLAR)/i },
  { code: "EUR", pattern: /(?:EUR|EURO)/i },
  { code: "JPY", pattern: /(?:JPY|YEN|JAPAN)/i },
  { code: "GBP", pattern: /(?:GBP|POUND|STERLING)/i },
  { code: "SGD", pattern: /(?:SGD|SINGAPORE)/i },
  { code: "HKD", pattern: /(?:HKD|HONG\s*KONG)/i },
  { code: "AUD", pattern: /(?:AUD|AUSTRALIAN)/i },
  { code: "CAD", pattern: /(?:CAD|CANADIAN)/i },
  { code: "CHF", pattern: /(?:CHF|SWISS)/i },
  { code: "CNY", pattern: /(?:CNY|RMB|YUAN|CHINA)/i },
  { code: "KRW", pattern: /(?:KRW|KOREA|WON)/i },
  { code: "THB", pattern: /(?:THB|BAHT|THAILAND)/i },
  { code: "MYR", pattern: /(?:MYR|RINGGIT|MALAYSIA)/i },
  { code: "AED", pattern: /(?:AED|DIRHAM)/i },
  { code: "SAR", pattern: /(?:SAR|RIYAL)/i },
  { code: "BND", pattern: /(?:BND|BRUNEI)/i },
  { code: "IDR", pattern: /(?:IDR|RUPIAH|INDONESIA)/i },
  { code: "INR", pattern: /(?:INR|RUPEE|INDIA)/i },
  { code: "KWD", pattern: /(?:KWD|KUWAIT)/i },
  { code: "BHD", pattern: /(?:BHD|BAHRAIN)/i },
  { code: "QAR", pattern: /(?:QAR|QATAR)/i },
  { code: "OMR", pattern: /(?:OMR|OMAN)/i },
  { code: "NZD", pattern: /(?:NZD|NEW\s*ZEALAND)/i },
  { code: "TWD", pattern: /(?:TWD|TAIWAN)/i }
];

const staffAccounts = [
  {
    username: "wendixter",
    password: "Wendixter123",
    name: "Wendixter Cutanda"
  },
  {
    username: "johnbenedict",
    password: "JohnBenedict123",
    name: "John Benedict Andaya"
  },
  {
    username: "chienna",
    password: "Chienna123",
    name: "Chienna Rell Langutan"
  },
  {
    username: "unfernie",
    password: "Unfernie123",
    name: "Unfernie Pulvera"
  },
  {
    username: "erica",
    password: "Erica123",
    name: "Erica Santillan"
  },
  {
    username: "marialiezl",
    password: "MariaLiezl123",
    name: "Maria Liezl Lascota"
  },
  {
    username: "jayoyao",
    password: "JayOyao123",
    name: "Jay A. Oyao"
  }
];

const rotatingStatuses = [
  "Systems normal",
  "Morning queues under control"
];

const inspirationalQuotes = [
  {
    quote: "You have to believe in yourself when no one else does.",
    author: "Serena Williams"
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Keep smiling, because life is a beautiful thing.",
    author: "Marilyn Monroe"
  },
  {
    quote: "Be persistent and never give up hope.",
    author: "George Lucas"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Life has no limitations, except the ones you make.",
    author: "Les Brown"
  },
  {
    quote: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "May you live every day of your life.",
    author: "Jonathan Swift"
  }
];

const defaultTasks = [
  {
    id: "task-1",
    title: "Review passenger manifest endorsements",
    completed: false,
    assignedTo: "General Queue",
    createdBy: "System",
    updatedBy: "System"
  },
  {
    id: "task-2",
    title: "Finalize front desk daily summary",
    completed: true,
    assignedTo: "General Queue",
    createdBy: "System",
    updatedBy: "System"
  }
];

const meetingsStorageKey = "officePortalSirJayMeetings";
const defaultMeetings = [
  {
    id: "meeting-1",
    title: "Morning alignment",
    date: "2026-03-31",
    time: "09:00",
    place: "Admin, records, and operations teams"
  },
  {
    id: "meeting-2",
    title: "Leadership briefing",
    date: "2026-03-31",
    time: "10:00",
    place: "Conference Room A"
  },
  {
    id: "meeting-3",
    title: "IT maintenance window",
    date: "2026-03-31",
    time: "13:00",
    place: "Shared systems observation"
  },
  {
    id: "meeting-4",
    title: "Endorsement cutoff",
    date: "2026-03-31",
    time: "15:30",
    place: "Urgent release processing"
  }
];

const flightsEncodingSheetQueryUrl = "https://docs.google.com/spreadsheets/d/186Q3joyEyPqKRHXpS0q7rkOjCrqfzHjT19LKWyLZ_bQ/gviz/tq";
const flightsSummarySheetCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRlQcWVBhOijZfJBKpynW1fInjUtBDiYhNKKo7fdwkGFFw1hpN1n6n10oev3BNrttOgr1HOmgTlMN1g/pub?output=csv";
const averageFlightsCacheKey = "officePortalAverageFlightsWeekly";
const averageOutgoingFlightsCacheKey = "officePortalAverageOutgoingFlightsWeekly";
const averagePassengersCacheKey = "officePortalAveragePassengersWeekly";
const averageOutgoingPassengersCacheKey = "officePortalAverageOutgoingPassengersWeekly";
const attendanceLogKey = "officePortalAttendanceLog";
const staffDutyStorageKey = "officePortalStaffOnDuty";
const cloudDatabaseUrlKey = "officePortalCloudDatabaseUrl";
const messengerStorageKey = "officePortalMessengerMessages";
const messengerReadKey = "officePortalMessengerLastReadAt";
const messengerLastNotifiedKey = "officePortalMessengerLastNotifiedAt";
const quickSidebarPositionKey = "officePortalQuickSidebarPosition";
const dismissedNotificationsStorageKey = "officePortalDismissedNotifications";
const headOfPassengerServiceName = "Jay A. Oyao";
const cloudSyncAttendancePath = "officePortal/attendanceLog";
const cloudSyncStaffDutyPath = "officePortal/staffOnDutyByUid";
const cloudSyncTasksPath = "officePortal/shared/tasks";
const cloudSyncMeetingsPath = "officePortal/shared/meetings";
const cloudSyncMessengerPath = "officePortal/shared/messenger";
const cloudSyncCurrencyExchangePath = "officePortal/shared/currencyExchange";
const cloudSyncPollIntervalMs = 15000;
const cloudDatabaseUrl = (window.OFFICE_PORTAL_CLOUD_DB_URL || "https://your-project-id-default-rtdb.firebaseio.com").trim();
const cloudAuthApiKey = (window.OFFICE_PORTAL_FIREBASE_API_KEY || "").trim();
const cloudAuthEmailDomain = (window.OFFICE_PORTAL_AUTH_EMAIL_DOMAIN || "").trim().toLowerCase();
const cloudSecureMode = window.OFFICE_PORTAL_CLOUD_SECURE_MODE !== false;
const cloudAuthUidKey = "officePortalCloudAuthUid";
const cloudAuthTokenKey = "officePortalCloudAuthToken";
const cloudAuthTokenExpiryKey = "officePortalCloudAuthTokenExpiry";
const cloudAuthRefreshTokenKey = "officePortalCloudRefreshToken";
const cloudAuthRefreshBufferMs = 60 * 1000;
let messengerAudioContext = null;
const sessionAccessKey = "officePortalAccess";
const sessionStaffNameKey = "officePortalStaffName";
const sessionAttendanceTimeKey = "officePortalAttendanceTime";
const sessionNotificationsClearedKey = "officePortalNotificationsCleared";

function getSessionItem(key) {
  return sessionStorage.getItem(key);
}

function setSessionItem(key, value) {
  sessionStorage.setItem(key, value);
}

function removeSessionItem(key) {
  sessionStorage.removeItem(key);
}

function isCloudAuthConfigured() {
  return Boolean(cloudAuthApiKey && cloudAuthEmailDomain && cloudAuthEmailDomain !== "your-domain.com");
}

function getCloudAuthToken() {
  return getSessionItem(cloudAuthTokenKey);
}

function getCloudAuthUid() {
  return getSessionItem(cloudAuthUidKey);
}

function getCloudAuthRefreshToken() {
  return getSessionItem(cloudAuthRefreshTokenKey);
}

function getCloudAuthTokenExpiry() {
  return Number(getSessionItem(cloudAuthTokenExpiryKey) || "0");
}

function setCloudAuthSession(session) {
  if (!session?.idToken) {
    return;
  }

  const expiresInSeconds = Number(session.expiresIn || 0);
  const expiresAt = Date.now() + (Number.isFinite(expiresInSeconds) ? expiresInSeconds * 1000 : 0);
  setSessionItem(cloudAuthTokenKey, session.idToken);
  setSessionItem(cloudAuthTokenExpiryKey, String(expiresAt));

  const cloudUid = session.localId || session.user_id || getCloudAuthUid();
  if (cloudUid) {
    setSessionItem(cloudAuthUidKey, cloudUid);
  }

  if (session.refreshToken) {
    setSessionItem(cloudAuthRefreshTokenKey, session.refreshToken);
  }
}

function clearCloudAuthSession() {
  removeSessionItem(cloudAuthUidKey);
  removeSessionItem(cloudAuthTokenKey);
  removeSessionItem(cloudAuthTokenExpiryKey);
  removeSessionItem(cloudAuthRefreshTokenKey);
}

function isCloudAuthTokenValid() {
  const token = getCloudAuthToken();
  const expiresAt = getCloudAuthTokenExpiry();

  if (!token || !Number.isFinite(expiresAt)) {
    return false;
  }

  return Date.now() < (expiresAt - cloudAuthRefreshBufferMs);
}

function buildCloudAuthEmail(username) {
  const normalizedUsername = String(username || "").trim().toLowerCase();
  return normalizedUsername ? `${normalizedUsername}@${cloudAuthEmailDomain}` : "";
}

async function signUpCloudAuth(username, password) {
  if (!isCloudAuthConfigured()) {
    throw new Error("Cloud authentication is not configured.");
  }

  const email = buildCloudAuthEmail(username);

  if (!email) {
    throw new Error("Missing cloud authentication email.");
  }

  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${encodeURIComponent(cloudAuthApiKey)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    })
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload?.error?.message || "Cloud account creation failed.");
  }

  setCloudAuthSession(payload);
}

async function signInCloudAuth(username, password) {
  if (!isCloudAuthConfigured()) {
    throw new Error("Cloud authentication is not configured.");
  }

  const email = buildCloudAuthEmail(username);

  if (!email) {
    throw new Error("Missing cloud authentication email.");
  }

  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${encodeURIComponent(cloudAuthApiKey)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    })
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload?.error?.message || "Cloud authentication failed.");
  }

  setCloudAuthSession(payload);
}

async function ensureCloudAuthAccount(username, password) {
  try {
    await signInCloudAuth(username, password);
  } catch (error) {
    const message = String(error?.message || "");

    if (message.includes("EMAIL_NOT_FOUND") || message.includes("INVALID_LOGIN_CREDENTIALS")) {
      await signUpCloudAuth(username, password);
      return;
    }

    if (message.includes("EMAIL_EXISTS")) {
      await signInCloudAuth(username, password);
      return;
    }

    throw error;
  }
}

async function refreshCloudAuthToken() {
  if (!isCloudAuthConfigured()) {
    return;
  }

  const refreshToken = getCloudAuthRefreshToken();

  if (!refreshToken) {
    throw new Error("Missing cloud refresh token.");
  }

  const response = await fetch(`https://securetoken.googleapis.com/v1/token?key=${encodeURIComponent(cloudAuthApiKey)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `grant_type=refresh_token&refresh_token=${encodeURIComponent(refreshToken)}`
  });

  if (!response.ok) {
    throw new Error("Cloud token refresh failed.");
  }

  const payload = await response.json();
  setCloudAuthSession({
    idToken: payload.id_token,
    refreshToken: payload.refresh_token,
    expiresIn: payload.expires_in
  });
}

async function ensureCloudAuthToken() {
  if (!isCloudSyncEnabled() || !cloudSecureMode) {
    return "";
  }

  if (!isCloudAuthConfigured()) {
    return "";
  }

  if (isCloudAuthTokenValid()) {
    return getCloudAuthToken();
  }

  await refreshCloudAuthToken();
  return getCloudAuthToken();
}

function normalizeCloudDatabaseUrl(url) {
  return String(url || "").trim().replace(/\/+$/, "");
}

function getCloudDatabaseUrl() {
  const savedUrl = localStorage.getItem(cloudDatabaseUrlKey);
  return normalizeCloudDatabaseUrl(savedUrl || cloudDatabaseUrl);
}

function isCloudSyncEnabled() {
  const url = getCloudDatabaseUrl();
  return Boolean(url) && !url.includes("your-project-id");
}

function renderSecurityStatusNotice() {
  if (!securityStatusElement) {
    return;
  }

  securityStatusElement.classList.remove("is-warning", "is-ready");

  if (!cloudSecureMode) {
    securityStatusElement.textContent = "Security mode is currently optional. Turn on secure mode after Firebase setup is complete.";
    return;
  }

  if (!isCloudSyncEnabled()) {
    securityStatusElement.textContent = "Secure mode is ON, but cloud database URL is still not configured.";
    securityStatusElement.classList.add("is-warning");
    return;
  }

  if (!isCloudAuthConfigured()) {
    securityStatusElement.textContent = "Secure mode is ON, but Firebase API key or email domain is missing.";
    securityStatusElement.classList.add("is-warning");
    return;
  }

  securityStatusElement.textContent = "Secure cloud authentication is active for staff accounts.";
  securityStatusElement.classList.add("is-ready");
}

function buildCloudSyncUrl(path, authToken = "") {
  const baseUrl = getCloudDatabaseUrl();
  const query = authToken ? `?auth=${encodeURIComponent(authToken)}` : "";
  return `${baseUrl}/${path}.json${query}`;
}

async function fetchCloudSharedValue(path) {
  if (!isCloudSyncEnabled()) {
    return null;
  }

  const token = await ensureCloudAuthToken();
  const response = await fetch(buildCloudSyncUrl(path, token), {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Unable to fetch ${path}.`);
  }

  return response.json();
}

async function saveCloudSharedValue(path, value) {
  if (!isCloudSyncEnabled()) {
    return;
  }

  try {
    const token = await ensureCloudAuthToken();

    await fetch(buildCloudSyncUrl(path, token), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(value),
      keepalive: true
    });
  } catch {
    // Keep local behavior active when cloud sync is unavailable.
  }
}

async function fetchCloudAttendanceLog() {
  if (!isCloudSyncEnabled()) {
    return [];
  }

  const token = await ensureCloudAuthToken();

  const response = await fetch(buildCloudSyncUrl(cloudSyncAttendancePath, token), {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Unable to fetch cloud attendance log.");
  }

  const data = await response.json();

  if (!data || typeof data !== "object") {
    return [];
  }

  return Object.values(data)
    .map((entry) => ({
      staffName: entry?.staffName || "",
      timestamp: entry?.timestamp || "",
      manilaDate: entry?.manilaDate || "",
      uid: entry?.uid || "",
      createdAt: typeof entry?.createdAt === "number" ? entry.createdAt : 0
    }))
    .filter((entry) => entry.staffName && entry.timestamp)
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 20);
}

async function pushAttendanceLogToCloud(entry) {
  if (!isCloudSyncEnabled()) {
    return;
  }

  try {
    const token = await ensureCloudAuthToken();

    await fetch(buildCloudSyncUrl(cloudSyncAttendancePath, token), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry),
      keepalive: true
    });
  } catch {
    // Keep local behavior active when cloud sync is unavailable.
  }
}

async function fetchCloudStaffOnDuty() {
  if (!isCloudSyncEnabled()) {
    return [];
  }

  const token = await ensureCloudAuthToken();

  const response = await fetch(buildCloudSyncUrl(cloudSyncStaffDutyPath, token), {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Unable to fetch cloud staff on duty.");
  }

  const data = await response.json();

  if (!data || typeof data !== "object") {
    return [];
  }

  return Object.values(data)
    .map((entry) => ({
      staffName: entry?.staffName || "",
      timestamp: entry?.timestamp || ""
    }))
    .filter((entry) => entry.staffName && entry.timestamp);
}

async function saveStaffDutyEntryToCloud(value) {
  if (!isCloudSyncEnabled()) {
    return;
  }

  const key = getCloudAuthUid();

  if (!key) {
    return;
  }

  try {
    const token = await ensureCloudAuthToken();

    await fetch(buildCloudSyncUrl(`${cloudSyncStaffDutyPath}/${key}`, token), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(value),
      keepalive: true
    });
  } catch {
    // Keep local behavior active when cloud sync is unavailable.
  }
}

async function refreshCloudPresenceData() {
  if (!isCloudSyncEnabled()) {
    return;
  }

  try {
    const [attendanceResult, dutyResult] = await Promise.allSettled([
      fetchCloudAttendanceLog(),
      fetchCloudStaffOnDuty()
    ]);

    if (attendanceResult.status === "fulfilled" && Array.isArray(attendanceResult.value)) {
      saveAttendanceLog(attendanceResult.value);
      renderNotifications();
    }

    if (dutyResult.status === "fulfilled" && Array.isArray(dutyResult.value)) {
      saveStaffOnDuty(dutyResult.value);
      updateStaffOnDuty();
    }
  } catch {
    // Keep local behavior active when cloud sync is unavailable.
  }
}

async function refreshCloudSharedData() {
  if (!isCloudSyncEnabled()) {
    return;
  }

  try {
    const [tasksResult, meetingsResult, messengerResult, currencyResult] = await Promise.allSettled([
      fetchCloudSharedValue(cloudSyncTasksPath),
      fetchCloudSharedValue(cloudSyncMeetingsPath),
      fetchCloudSharedValue(cloudSyncMessengerPath),
      fetchCloudSharedValue(cloudSyncCurrencyExchangePath)
    ]);

    if (tasksResult.status === "fulfilled" && Array.isArray(tasksResult.value)) {
      localStorage.setItem(taskStorageKey, JSON.stringify(tasksResult.value));
      renderTaskBoard();
    }

    if (meetingsResult.status === "fulfilled" && Array.isArray(meetingsResult.value)) {
      localStorage.setItem(meetingsStorageKey, JSON.stringify(meetingsResult.value));
      if (meetingsResult.value.length) {
        removeSessionItem(sessionNotificationsClearedKey);
      }
      renderMeetingBoard();
      renderNotifications();
    }

    if (messengerResult.status === "fulfilled" && Array.isArray(messengerResult.value)) {
      localStorage.setItem(messengerStorageKey, JSON.stringify(messengerResult.value));
      renderMessenger();
      notifyForNewMessengerMessages();
    }

    if (
      currencyResult.status === "fulfilled" &&
      currencyResult.value &&
      Array.isArray(currencyResult.value.rates)
    ) {
      const isEditingCurrencyExchange = canEditCurrencyExchange()
        && (
          currencyExchangePanel?.classList.contains("task-tracker-panel-visible")
          || Array.isArray(loadCurrencyExchangeDraftData()?.rates)
        );

      if (!isEditingCurrencyExchange) {
        localStorage.setItem(currencyExchangeStorageKey, JSON.stringify(currencyResult.value));
        renderCurrencyExchange(currencyResult.value);
      }
    }
  } catch {
    // Keep local behavior active when cloud sync is unavailable.
  }
}

function startCloudSyncPolling() {
  if (!isCloudSyncEnabled()) {
    return;
  }

  refreshCloudPresenceData();
  refreshCloudSharedData();
  window.setInterval(refreshCloudPresenceData, cloudSyncPollIntervalMs);
  window.setInterval(refreshCloudSharedData, cloudSyncPollIntervalMs);
}

async function authenticateCloudSessionForAccount(account) {
  if (!isCloudSyncEnabled() || !cloudSecureMode) {
    return;
  }

  if (!isCloudAuthConfigured()) {
    return;
  }

  if (!account?.username || !account?.password) {
    throw new Error("Missing account credentials for cloud authentication.");
  }

  await ensureCloudAuthAccount(account.username, account.password);
}

function resetSavedCurrencyExchangeOnce() {
  if (localStorage.getItem(currencyExchangeResetKey) === "done") {
    return;
  }

  localStorage.removeItem(currencyExchangeStorageKey);
  localStorage.removeItem(currencyExchangeDraftKey);
  localStorage.setItem(currencyExchangeResetKey, "done");
}
const fallbackWeeklyFlights = {
  weekKey: "2026-03-23_2026-03-29",
  value: "30",
  note: "Based on Flights Summary data from 2026-03-23 to 2026-03-29."
};
const fallbackWeeklyOutgoingFlights = {
  weekKey: "2026-03-23_2026-03-29",
  value: "30",
  note: "Based on Flights Summary data from 2026-03-23 to 2026-03-29."
};
const fallbackWeeklyPassengers = {
  weekKey: "2026-03-23_2026-03-29",
  value: "4,931",
  note: "Based on Flights Summary data from 2026-03-23 to 2026-03-29."
};
const fallbackWeeklyOutgoingPassengers = {
  weekKey: "2026-03-23_2026-03-29",
  value: "5,533",
  note: "Based on Flights Summary data from 2026-03-23 to 2026-03-29."
};

function formatTime() {
  return new Intl.DateTimeFormat("en-PH", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Manila"
  }).format(new Date());
}

function updateLoginClock() {
  if (loginClock) {
    loginClock.textContent = formatTime();
  }
}

function updateDashboardClock() {
  const now = new Date();

  if (currentDate) {
    currentDate.textContent = new Intl.DateTimeFormat("en-PH", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "Asia/Manila"
    }).format(now);
  }

  if (currentTime) {
    currentTime.textContent = new Intl.DateTimeFormat("en-PH", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Manila"
    }).format(now);
  }
}

function rotateStatus() {
  if (!statusMessage) {
    return;
  }

  const index = Math.floor(Date.now() / 8000) % rotatingStatuses.length;
  statusMessage.textContent = rotatingStatuses[index];
}

function updateDailyQuote() {
  if (!dailyQuote || !dailyQuoteAuthor) {
    return;
  }

  const now = new Date();
  const manilaDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(now);

  const daySeed = Number(manilaDate.replaceAll("-", ""));
  const selectedQuote = inspirationalQuotes[daySeed % inspirationalQuotes.length];

  dailyQuote.textContent = selectedQuote.quote;
  dailyQuoteAuthor.textContent = selectedQuote.author;
}

function getManilaNow() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }));
}

function formatIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function getWeeklyFlightsWindow() {
  const manilaNow = getManilaNow();
  const currentDay = manilaNow.getDay();
  const daysSinceMonday = (currentDay + 6) % 7;
  const thisMonday = new Date(manilaNow);
  thisMonday.setHours(0, 0, 0, 0);
  thisMonday.setDate(manilaNow.getDate() - daysSinceMonday);

  const releaseTime = new Date(thisMonday);
  releaseTime.setHours(6, 30, 0, 0);

  const lastWeekMonday = addDays(thisMonday, -7);
  const lastWeekSunday = addDays(thisMonday, -1);

  return {
    manilaNow,
    releaseTime,
    startDate: formatIsoDate(lastWeekMonday),
    endDate: formatIsoDate(lastWeekSunday),
    weekKey: `${formatIsoDate(lastWeekMonday)}_${formatIsoDate(lastWeekSunday)}`
  };
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat("en-PH", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

function getCurrencyExchangeWeekRange() {
  const manilaNow = getManilaNow();
  const currentDay = manilaNow.getDay();
  const daysSinceSaturday = (currentDay + 1) % 7;
  const saturday = new Date(manilaNow);
  saturday.setHours(0, 0, 0, 0);
  saturday.setDate(manilaNow.getDate() - daysSinceSaturday);
  const friday = addDays(saturday, 6);

  return `${formatLongDate(saturday)} to ${formatLongDate(friday)}`;
}

function updateCurrencyExchangeRangeLabel() {
  const dateRangeLabel = getCurrencyExchangeWeekRange();

  if (currencyExchangeStatus) {
    currencyExchangeStatus.textContent = dateRangeLabel;
  }

  if (currencyExchangePanelNote) {
    currencyExchangePanelNote.textContent = dateRangeLabel;
  }
}

function parseSheetDate(value) {
  if (!value) {
    return null;
  }

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "string") {
    const normalized = value.trim();
    const parsed = new Date(normalized);

    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(0, 10);
    }

    const slashMatch = normalized.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
    if (slashMatch) {
      const [, month, day, year] = slashMatch;
      const fullYear = year.length === 2 ? `20${year}` : year;
      return `${fullYear.padStart(4, "0")}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }

  return null;
}

function extractCellValue(cell) {
  if (!cell) {
    return null;
  }

  return cell.v ?? cell.f ?? null;
}

function parseCsvRow(row) {
  const values = [];
  let current = "";
  let insideQuotes = false;

  for (let index = 0; index < row.length; index += 1) {
    const character = row[index];
    const nextCharacter = row[index + 1];

    if (character === '"' && insideQuotes && nextCharacter === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (character === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (character === "," && !insideQuotes) {
      values.push(current.trim());
      current = "";
      continue;
    }

    current += character;
  }

  values.push(current.trim());
  return values;
}

function updateAverageFlightsDisplay(value, note) {
  if (!averageFlightsValue || !averageFlightsNote) {
    return;
  }

  averageFlightsValue.textContent = value;
  averageFlightsNote.textContent = note;
}

function updateAverageOutgoingFlightsDisplay(value, note) {
  if (!averageOutgoingFlightsValue || !averageOutgoingFlightsNote) {
    return;
  }

  averageOutgoingFlightsValue.textContent = value;
  averageOutgoingFlightsNote.textContent = note;
}

function updateAveragePassengersDisplay(value, note) {
  if (!averagePassengersValue || !averagePassengersNote) {
    return;
  }

  averagePassengersValue.textContent = value;
  averagePassengersNote.textContent = note;
}

function updateAverageOutgoingPassengersDisplay(value, note) {
  if (!averageOutgoingPassengersValue || !averageOutgoingPassengersNote) {
    return;
  }

  averageOutgoingPassengersValue.textContent = value;
  averageOutgoingPassengersNote.textContent = note;
}

function normalizeWholeNumber(value, useGrouping = false) {
  const numericValue = Number(String(value ?? "").replace(/,/g, ""));

  if (!Number.isFinite(numericValue)) {
    return String(value ?? "--");
  }

  const roundedValue = Math.round(numericValue);
  return useGrouping ? new Intl.NumberFormat("en-PH").format(roundedValue) : String(roundedValue);
}

function loadAveragePassengersCache() {
  try {
    const cache = JSON.parse(localStorage.getItem(averagePassengersCacheKey) || "null");
    if (cache?.value) {
      cache.value = normalizeWholeNumber(cache.value, true);
    }
    return cache;
  } catch {
    return null;
  }
}

function saveAveragePassengersCache(cache) {
  localStorage.setItem(averagePassengersCacheKey, JSON.stringify(cache));
}

function loadAverageOutgoingPassengersCache() {
  try {
    const cache = JSON.parse(localStorage.getItem(averageOutgoingPassengersCacheKey) || "null");
    if (cache?.value) {
      cache.value = normalizeWholeNumber(cache.value, true);
    }
    return cache;
  } catch {
    return null;
  }
}

function saveAverageOutgoingPassengersCache(cache) {
  localStorage.setItem(averageOutgoingPassengersCacheKey, JSON.stringify(cache));
}

function loadAverageOutgoingFlightsCache() {
  try {
    const cache = JSON.parse(localStorage.getItem(averageOutgoingFlightsCacheKey) || "null");
    if (cache?.value) {
      cache.value = normalizeWholeNumber(cache.value);
    }
    return cache;
  } catch {
    return null;
  }
}

function saveAverageOutgoingFlightsCache(cache) {
  localStorage.setItem(averageOutgoingFlightsCacheKey, JSON.stringify(cache));
}

function calculateAverageFlightsFromSummaryCsv(rows, windowRange) {
  const groupedByDate = new Map();
  const headers = rows[0] ?? [];
  const dateColumnIndex = headers.findIndex((header) => /date\s*of\s*arrival/i.test(String(header).toLowerCase()));
  const flightArrivalColumnIndex = headers.findIndex((header) => /flight\s*arrivals|flight\s*arrivalls/i.test(String(header).toLowerCase()));

  if (dateColumnIndex === -1 || flightArrivalColumnIndex === -1) {
    return null;
  }

  rows.slice(1).forEach((row) => {
    const possibleDate = parseSheetDate(row[dateColumnIndex]);

    if (!possibleDate || possibleDate < windowRange.startDate || possibleDate > windowRange.endDate) {
      return;
    }

    const cellValue = row[flightArrivalColumnIndex];
    const numericFlightTotal = Number(String(cellValue ?? "").replace(/,/g, ""));

    if (numericFlightTotal > 0) {
      groupedByDate.set(possibleDate, (groupedByDate.get(possibleDate) ?? 0) + numericFlightTotal);
    }
  });

  if (!groupedByDate.size) {
    return null;
  }

  const totalFlights = Array.from(groupedByDate.values()).reduce((sum, count) => sum + count, 0);
  return String(Math.round(totalFlights / groupedByDate.size));
}

function calculateAveragePassengersFromSummaryCsv(rows, windowRange) {
  const groupedByDate = new Map();
  const headers = rows[0] ?? [];
  const dateColumnIndex = headers.findIndex((header) => /date\s*of\s*arrival/i.test(String(header).toLowerCase()));
  const passengerColumnIndex = headers.findIndex((header) => /total\s*arriving\s*travelers/i.test(String(header).toLowerCase()));

  if (dateColumnIndex === -1 || passengerColumnIndex === -1) {
    return null;
  }

  rows.slice(1).forEach((row) => {
    const possibleDate = parseSheetDate(row[dateColumnIndex]);

    if (!possibleDate || possibleDate < windowRange.startDate || possibleDate > windowRange.endDate) {
      return;
    }

    const cellValue = row[passengerColumnIndex];
    const numericPassengerTotal = Number(String(cellValue ?? "").replace(/,/g, ""));

    if (numericPassengerTotal > 0) {
      groupedByDate.set(possibleDate, (groupedByDate.get(possibleDate) ?? 0) + numericPassengerTotal);
    }
  });

  if (!groupedByDate.size) {
    return null;
  }

  const totalPassengers = Array.from(groupedByDate.values()).reduce((sum, count) => sum + count, 0);
  return new Intl.NumberFormat("en-PH").format(Math.round(totalPassengers / groupedByDate.size));
}

function calculateAverageOutgoingFlightsFromSummaryCsv(rows, windowRange) {
  const groupedByDate = new Map();
  const headers = rows[0] ?? [];
  const dateColumnIndex = headers.findIndex((header) => /date\s*of\s*arrival/i.test(String(header).toLowerCase()));
  const departuresColumnIndex = headers.findIndex((header) => /flight\s*departures/i.test(String(header).toLowerCase()));

  if (dateColumnIndex === -1 || departuresColumnIndex === -1) {
    return null;
  }

  rows.slice(1).forEach((row) => {
    const possibleDate = parseSheetDate(row[dateColumnIndex]);

    if (!possibleDate || possibleDate < windowRange.startDate || possibleDate > windowRange.endDate) {
      return;
    }

    const cellValue = row[departuresColumnIndex];
    const numericDepartureTotal = Number(String(cellValue ?? "").replace(/,/g, ""));

    if (numericDepartureTotal > 0) {
      groupedByDate.set(possibleDate, (groupedByDate.get(possibleDate) ?? 0) + numericDepartureTotal);
    }
  });

  if (!groupedByDate.size) {
    return null;
  }

  const totalOutgoingFlights = Array.from(groupedByDate.values()).reduce((sum, count) => sum + count, 0);
  return String(Math.round(totalOutgoingFlights / groupedByDate.size));
}

function calculateAverageOutgoingPassengersFromSummaryCsv(rows, windowRange) {
  const groupedByDate = new Map();
  const headers = rows[0] ?? [];
  const dateColumnIndex = headers.findIndex((header) => /date\s*of\s*arrival/i.test(String(header).toLowerCase()));
  const outgoingPassengersColumnIndex = headers.findIndex((header) => /total\s*departing\s*travelers/i.test(String(header).toLowerCase()));

  if (dateColumnIndex === -1 || outgoingPassengersColumnIndex === -1) {
    return null;
  }

  rows.slice(1).forEach((row) => {
    const possibleDate = parseSheetDate(row[dateColumnIndex]);

    if (!possibleDate || possibleDate < windowRange.startDate || possibleDate > windowRange.endDate) {
      return;
    }

    const cellValue = row[outgoingPassengersColumnIndex];
    const numericOutgoingPassengersTotal = Number(String(cellValue ?? "").replace(/,/g, ""));

    if (numericOutgoingPassengersTotal > 0) {
      groupedByDate.set(possibleDate, (groupedByDate.get(possibleDate) ?? 0) + numericOutgoingPassengersTotal);
    }
  });

  if (!groupedByDate.size) {
    return null;
  }

  const totalOutgoingPassengers = Array.from(groupedByDate.values()).reduce((sum, count) => sum + count, 0);
  return new Intl.NumberFormat("en-PH").format(Math.round(totalOutgoingPassengers / groupedByDate.size));
}

function loadAverageFlightsCache() {
  try {
    const cache = JSON.parse(localStorage.getItem(averageFlightsCacheKey) || "null");
    if (cache?.value) {
      cache.value = normalizeWholeNumber(cache.value);
    }
    return cache;
  } catch {
    return null;
  }
}

function saveAverageFlightsCache(cache) {
  localStorage.setItem(averageFlightsCacheKey, JSON.stringify(cache));
}

function updateAverageFlights() {
  if (!averageFlightsValue || !averageFlightsNote) {
    return;
  }

  const windowRange = getWeeklyFlightsWindow();
  const cachedAverage = loadAverageFlightsCache();
  const cachedOutgoingFlights = loadAverageOutgoingFlightsCache();
  const cachedPassengers = loadAveragePassengersCache();
  const cachedOutgoingPassengers = loadAverageOutgoingPassengersCache();

  if (!cachedAverage && windowRange.weekKey === fallbackWeeklyFlights.weekKey) {
    saveAverageFlightsCache(fallbackWeeklyFlights);
  }

  if (!cachedOutgoingFlights && windowRange.weekKey === fallbackWeeklyOutgoingFlights.weekKey) {
    saveAverageOutgoingFlightsCache(fallbackWeeklyOutgoingFlights);
  }

  if (!cachedPassengers && windowRange.weekKey === fallbackWeeklyPassengers.weekKey) {
    saveAveragePassengersCache(fallbackWeeklyPassengers);
  }

  if (!cachedOutgoingPassengers && windowRange.weekKey === fallbackWeeklyOutgoingPassengers.weekKey) {
    saveAverageOutgoingPassengersCache(fallbackWeeklyOutgoingPassengers);
  }

  const resolvedCache = loadAverageFlightsCache();
  const resolvedOutgoingFlightsCache = loadAverageOutgoingFlightsCache();
  const resolvedPassengersCache = loadAveragePassengersCache();
  const resolvedOutgoingPassengersCache = loadAverageOutgoingPassengersCache();

  if (resolvedOutgoingFlightsCache && (windowRange.manilaNow < windowRange.releaseTime || resolvedOutgoingFlightsCache.weekKey === windowRange.weekKey)) {
    updateAverageOutgoingFlightsDisplay(
      resolvedOutgoingFlightsCache.value,
      `${resolvedOutgoingFlightsCache.note} Weekly refresh is scheduled every Monday at 6:30 AM Manila time.`
    );
  }

  if (resolvedPassengersCache && (windowRange.manilaNow < windowRange.releaseTime || resolvedPassengersCache.weekKey === windowRange.weekKey)) {
    updateAveragePassengersDisplay(
      resolvedPassengersCache.value,
      `${resolvedPassengersCache.note} Weekly refresh is scheduled every Monday at 6:30 AM Manila time.`
    );
  }

  if (resolvedOutgoingPassengersCache && (windowRange.manilaNow < windowRange.releaseTime || resolvedOutgoingPassengersCache.weekKey === windowRange.weekKey)) {
    updateAverageOutgoingPassengersDisplay(
      resolvedOutgoingPassengersCache.value,
      `${resolvedOutgoingPassengersCache.note} Weekly refresh is scheduled every Monday at 6:30 AM Manila time.`
    );
  }

  if (resolvedCache && (windowRange.manilaNow < windowRange.releaseTime || resolvedCache.weekKey === windowRange.weekKey)) {
    updateAverageFlightsDisplay(
      resolvedCache.value,
      `${resolvedCache.note} Weekly refresh is scheduled every Monday at 6:30 AM Manila time.`
    );
    return;
  }

  updateAverageFlightsDisplay("--", "Loading Flights Summary data...");

  if (!resolvedOutgoingFlightsCache || (windowRange.manilaNow >= windowRange.releaseTime && resolvedOutgoingFlightsCache.weekKey !== windowRange.weekKey)) {
    updateAverageOutgoingFlightsDisplay("--", "Loading Flights Summary data...");
  }

  if (!resolvedPassengersCache || (windowRange.manilaNow >= windowRange.releaseTime && resolvedPassengersCache.weekKey !== windowRange.weekKey)) {
    updateAveragePassengersDisplay("--", "Loading Flights Summary data...");
  }

  if (!resolvedOutgoingPassengersCache || (windowRange.manilaNow >= windowRange.releaseTime && resolvedOutgoingPassengersCache.weekKey !== windowRange.weekKey)) {
    updateAverageOutgoingPassengersDisplay("--", "Loading Flights Summary data...");
  }

  fetch(flightsSummarySheetCsvUrl)
    .then((response) => response.text())
    .then((text) => {
      const rows = text
        .split(/\r?\n/)
        .map((row) => row.trim())
        .filter(Boolean)
        .map(parseCsvRow);

      const average = calculateAverageFlightsFromSummaryCsv(rows, windowRange);
      const averageOutgoingFlights = calculateAverageOutgoingFlightsFromSummaryCsv(rows, windowRange);
      const averagePassengers = calculateAveragePassengersFromSummaryCsv(rows, windowRange);
      const averageOutgoingPassengers = calculateAverageOutgoingPassengersFromSummaryCsv(rows, windowRange);

      if (average) {
        const cache = {
          weekKey: windowRange.weekKey,
          value: average,
          note: `Based on Flights Summary data from ${windowRange.startDate} to ${windowRange.endDate}.`
        };
        saveAverageFlightsCache(cache);
        updateAverageFlightsDisplay(
          average,
          `${cache.note} Refreshes every Monday at 6:30 AM Manila time.`
        );
      } else {
        updateAverageFlightsDisplay("--", `No last-week flights data was found from ${windowRange.startDate} to ${windowRange.endDate}.`);
      }

      if (averageOutgoingFlights) {
        const outgoingFlightsCache = {
          weekKey: windowRange.weekKey,
          value: averageOutgoingFlights,
          note: `Based on Flights Summary data from ${windowRange.startDate} to ${windowRange.endDate}.`
        };
        saveAverageOutgoingFlightsCache(outgoingFlightsCache);
        updateAverageOutgoingFlightsDisplay(
          averageOutgoingFlights,
          `${outgoingFlightsCache.note} Refreshes every Monday at 6:30 AM Manila time.`
        );
      } else {
        updateAverageOutgoingFlightsDisplay("--", `No last-week outgoing flights data was found from ${windowRange.startDate} to ${windowRange.endDate}.`);
      }

      if (averagePassengers) {
        const passengerCache = {
          weekKey: windowRange.weekKey,
          value: averagePassengers,
          note: `Based on Flights Summary data from ${windowRange.startDate} to ${windowRange.endDate}.`
        };
        saveAveragePassengersCache(passengerCache);
        updateAveragePassengersDisplay(
          averagePassengers,
          `${passengerCache.note} Refreshes every Monday at 6:30 AM Manila time.`
        );
      } else {
        updateAveragePassengersDisplay("--", `No last-week passenger data was found from ${windowRange.startDate} to ${windowRange.endDate}.`);
      }

      if (averageOutgoingPassengers) {
        const outgoingPassengerCache = {
          weekKey: windowRange.weekKey,
          value: averageOutgoingPassengers,
          note: `Based on Flights Summary data from ${windowRange.startDate} to ${windowRange.endDate}.`
        };
        saveAverageOutgoingPassengersCache(outgoingPassengerCache);
        updateAverageOutgoingPassengersDisplay(
          averageOutgoingPassengers,
          `${outgoingPassengerCache.note} Refreshes every Monday at 6:30 AM Manila time.`
        );
      } else {
        updateAverageOutgoingPassengersDisplay("--", `No last-week outgoing passenger data was found from ${windowRange.startDate} to ${windowRange.endDate}.`);
      }
    })
    .catch(() => {
      updateAverageFlightsDisplay("--", "Could not read Flights Summary data from Google Sheets.");
      updateAverageOutgoingFlightsDisplay("--", "Could not read Flights Summary data from Google Sheets.");
      updateAveragePassengersDisplay("--", "Could not read Flights Summary data from Google Sheets.");
      updateAverageOutgoingPassengersDisplay("--", "Could not read Flights Summary data from Google Sheets.");
    });
}

function scheduleWeeklyFlightsRefresh() {
  const { manilaNow, releaseTime } = getWeeklyFlightsWindow();
  let nextRun = new Date(releaseTime);

  if (manilaNow >= releaseTime) {
    nextRun = addDays(releaseTime, 7);
  }

  const delay = nextRun.getTime() - manilaNow.getTime();

  window.setTimeout(() => {
    updateAverageFlights();
    window.setInterval(updateAverageFlights, 7 * 24 * 60 * 60 * 1000);
  }, delay);
}

function updateStaffOnDuty() {
  if (!staffOnDutyName || !staffAttendanceTime) {
    return;
  }

  const dutyStaff = loadStaffOnDuty();
  const currentStaffName = getSessionItem(sessionStaffNameKey);

  if (!dutyStaff.length) {
    staffOnDutyName.textContent = "No staff marked on duty yet";
    staffAttendanceTime.textContent = currentStaffName
      ? "Use the duty circle to mark this account as staff on duty."
      : "Attendance timestamp will appear here";
  } else {
    staffOnDutyName.innerHTML = dutyStaff.map((entry) => `
      <span class="staff-on-duty-entry">
        <span class="staff-on-duty-person">${entry.staffName}</span>
        <span class="staff-on-duty-time">On duty since ${entry.timestamp}</span>
      </span>
    `).join("");
    staffAttendanceTime.textContent = "";
  }

  updateStaffDutyToggle();
}

function loadStaffOnDuty() {
  try {
    const dutyList = JSON.parse(localStorage.getItem(staffDutyStorageKey) || "[]");

    if (!Array.isArray(dutyList)) {
      return [];
    }

    return dutyList.filter((entry) => entry?.staffName && entry?.timestamp);
  } catch {
    return [];
  }
}

function saveStaffOnDuty(dutyList) {
  localStorage.setItem(staffDutyStorageKey, JSON.stringify(dutyList));
}

function isCurrentStaffOnDuty() {
  const currentStaffName = getCurrentStaffName();
  return loadStaffOnDuty().some((entry) => entry.staffName === currentStaffName);
}

function updateStaffDutyToggle() {
  if (!staffDutyToggle) {
    return;
  }

  const isOnDuty = isCurrentStaffOnDuty();
  staffDutyToggle.classList.toggle("is-active", isOnDuty);
  staffDutyToggle.setAttribute("aria-pressed", String(isOnDuty));
}

function toggleStaffDutyStatus() {
  const currentStaffName = getCurrentStaffName();

  if (!currentStaffName || currentStaffName === "PS Staff") {
    return;
  }

  const currentAttendanceTime = getSessionItem(sessionAttendanceTimeKey) || `Logged in: ${formatAttendanceTimestamp()}`;
  const dutyList = loadStaffOnDuty();
  const existingIndex = dutyList.findIndex((entry) => entry.staffName === currentStaffName);

  if (existingIndex >= 0) {
    dutyList.splice(existingIndex, 1);
    saveStaffDutyEntryToCloud(null);
  } else {
    const dutyEntry = {
      staffName: currentStaffName,
      timestamp: currentAttendanceTime
    };

    dutyList.unshift(dutyEntry);
    saveStaffDutyEntryToCloud(dutyEntry);
  }

  saveStaffOnDuty(dutyList);
  updateStaffOnDuty();
}

function formatAttendanceTimestamp() {
  return new Intl.DateTimeFormat("en-PH", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(new Date());
}

function loadAttendanceLog() {
  try {
    const log = JSON.parse(localStorage.getItem(attendanceLogKey) || "[]");
    if (!Array.isArray(log)) {
      return [];
    }

    return log.map((entry) => ({
      ...entry,
      createdAt: typeof entry.createdAt === "number" ? entry.createdAt : 0,
      manilaDate: entry.manilaDate || ""
    }));
  } catch {
    return [];
  }
}

function saveAttendanceLog(log) {
  localStorage.setItem(attendanceLogKey, JSON.stringify(log.slice(0, 20)));
}

function recordAttendanceLog(staffName, timestamp) {
  const manilaDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
  const log = loadAttendanceLog();
  const entry = {
    staffName,
    timestamp,
    manilaDate,
    uid: getCloudAuthUid() || "",
    createdAt: Date.now()
  };

  log.unshift(entry);
  saveAttendanceLog(log);
  pushAttendanceLogToCloud(entry);
}

function getTodayManilaDate() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function getCurrentStaffName() {
  return getSessionItem(sessionStaffNameKey) || "PS Staff";
}

function formatMessageTimestamp() {
  return new Intl.DateTimeFormat("en-PH", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
}

function loadMessengerMessages() {
  try {
    const messages = JSON.parse(localStorage.getItem(messengerStorageKey) || "[]");
    return Array.isArray(messages) ? messages : [];
  } catch {
    return [];
  }
}

function saveMessengerMessages(messages) {
  localStorage.setItem(messengerStorageKey, JSON.stringify(messages.slice(-100)));
  saveCloudSharedValue(cloudSyncMessengerPath, messages.slice(-100));
}

function ensureMessengerAudioReady() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!messengerAudioContext) {
    messengerAudioContext = new AudioContextClass();
  }

  if (messengerAudioContext.state === "suspended") {
    messengerAudioContext.resume().catch(() => {});
  }

  return messengerAudioContext;
}

function playMessengerNotificationSound() {
  const audioContext = ensureMessengerAudioReady();

  if (!audioContext || audioContext.state !== "running") {
    return;
  }
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const now = audioContext.currentTime;

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(880, now);
  oscillator.frequency.exponentialRampToValueAtTime(660, now + 0.18);

  gainNode.gain.setValueAtTime(0.0001, now);
  gainNode.gain.exponentialRampToValueAtTime(0.08, now + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.24);
}

function notifyForNewMessengerMessages() {
  const currentStaffName = getCurrentStaffName();
  const messages = getVisibleMessengerMessages();
  const lastNotifiedAt = Number(getSessionItem(messengerLastNotifiedKey) || "0");
  const latestIncomingMessage = messages
    .filter((message) =>
      message.from !== currentStaffName &&
      (message.to === "All Staff" || message.to === currentStaffName)
    )
    .sort((first, second) => second.createdAt - first.createdAt)[0];

  if (!latestIncomingMessage) {
    return;
  }

  if (latestIncomingMessage.createdAt > lastNotifiedAt) {
    playMessengerNotificationSound();
    setSessionItem(messengerLastNotifiedKey, String(latestIncomingMessage.createdAt));
  }
}

function getVisibleMessengerMessages() {
  const currentStaffName = getCurrentStaffName();
  return loadMessengerMessages().filter((message) =>
    message.to === "All Staff" ||
    message.to === currentStaffName ||
    message.from === currentStaffName
  );
}

function syncMessengerRecipientOptions() {
  if (!messengerRecipient) {
    return;
  }

  const currentStaffName = getCurrentStaffName();

  Array.from(messengerRecipient.options).forEach((option) => {
    option.disabled = option.value === currentStaffName;
  });

  if (messengerRecipient.value === currentStaffName) {
    messengerRecipient.value = "All Staff";
  }
}

function getMessengerThreadMessages(messages, selectedRecipient, currentStaffName) {
  if (selectedRecipient === "All Staff") {
    return messages;
  }

  return messages.filter((message) =>
    (message.from === currentStaffName && message.to === selectedRecipient) ||
    (message.from === selectedRecipient && message.to === currentStaffName)
  );
}

function setMessengerRecipient(recipient) {
  if (!messengerRecipient) {
    return;
  }

  const hasOption = Array.from(messengerRecipient.options).some((option) => option.value === recipient);
  messengerRecipient.value = hasOption ? recipient : "All Staff";
  renderMessenger();
}

function renderMessenger() {
  if (!messengerThread) {
    return;
  }

  syncMessengerRecipientOptions();
  const currentStaffName = getCurrentStaffName();
  const messages = getVisibleMessengerMessages();
  const selectedRecipient = messengerRecipient?.value || "All Staff";
  const threadMessages = getMessengerThreadMessages(messages, selectedRecipient, currentStaffName);
  const lastReadAt = Number(getSessionItem(messengerReadKey) || "0");
  const unreadCount = messages.filter((message) =>
    message.from !== currentStaffName &&
    message.createdAt > lastReadAt &&
    (message.to === "All Staff" || message.to === currentStaffName)
  ).length;

  if (messengerStatus) {
    messengerStatus.textContent = selectedRecipient === "All Staff"
      ? `Signed in as ${currentStaffName}. Viewing all staff messages.`
      : `Signed in as ${currentStaffName}. Chatting with ${selectedRecipient}.`;
  }

  messengerThread.innerHTML = threadMessages.length
    ? threadMessages.map((message) => `
      <article class="messenger-bubble ${message.from === currentStaffName ? "is-own" : ""}" data-reply-to="${message.from === currentStaffName ? message.to : message.from}">
        <div class="messenger-bubble-top">
          <p class="messenger-meta">${message.from} to ${message.to}</p>
          <button type="button" class="btn messenger-delete-btn" data-delete-message-id="${message.id}">
            Delete
          </button>
        </div>
        <p class="messenger-text">${message.text}</p>
        <p class="messenger-time">${message.timestamp}</p>
      </article>
    `).join("")
    : '<p class="messenger-empty">No staff messages yet in this conversation.</p>';

  messengerThread.querySelectorAll("[data-delete-message-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteMessengerMessage(button.dataset.deleteMessageId);
    });
  });

  messengerThread.querySelectorAll("[data-reply-to]").forEach((bubble) => {
    bubble.addEventListener("click", () => {
      const recipient = bubble.dataset.replyTo;
      if (recipient && recipient !== "All Staff" && recipient !== currentStaffName) {
        setMessengerRecipient(recipient);
        if (messengerInput) {
          messengerInput.focus();
        }
      }
    });
  });

  messengerThread.scrollTop = messengerThread.scrollHeight;
}

function applyQuickSidebarPosition(position) {
  if (!quickSidebar || !position) {
    return;
  }

  quickSidebar.classList.add("is-floating");
  quickSidebar.style.left = "24px";
  quickSidebar.style.top = `${position.top}px`;
}

function loadQuickSidebarPosition() {
  try {
    const position = JSON.parse(localStorage.getItem(quickSidebarPositionKey) || "null");
    if (typeof position?.top === "number") {
      applyQuickSidebarPosition(position);
    }
  } catch {
    localStorage.removeItem(quickSidebarPositionKey);
  }
}

function saveQuickSidebarPosition(position) {
  localStorage.setItem(quickSidebarPositionKey, JSON.stringify(position));
}

function enableQuickSidebarDrag() {
  if (!quickSidebar || !quickSidebarHandle) {
    return;
  }

  let isDragging = false;
  let pointerOffsetY = 0;

  quickSidebarHandle.addEventListener("pointerdown", (event) => {
    const rect = quickSidebar.getBoundingClientRect();
    isDragging = true;
    pointerOffsetY = event.clientY - rect.top;
    quickSidebar.classList.add("is-floating");
    quickSidebarHandle.style.cursor = "grabbing";
    quickSidebarHandle.setPointerCapture(event.pointerId);
  });

  quickSidebarHandle.addEventListener("pointermove", (event) => {
    if (!isDragging) {
      return;
    }

    const maxTop = window.innerHeight - quickSidebar.offsetHeight;
    const nextTop = Math.min(Math.max(0, event.clientY - pointerOffsetY), maxTop);
    applyQuickSidebarPosition({
      top: nextTop
    });
  });

  quickSidebarHandle.addEventListener("pointerup", (event) => {
    if (!isDragging) {
      return;
    }

    isDragging = false;
    quickSidebarHandle.style.cursor = "grab";
    quickSidebarHandle.releasePointerCapture(event.pointerId);
    const rect = quickSidebar.getBoundingClientRect();
    saveQuickSidebarPosition({
      top: rect.top
    });
  });
}

function openMessenger() {
  if (!messengerPanel) {
    return;
  }

  messengerPanel.classList.remove("messenger-panel-hidden");
  messengerPanel.classList.add("messenger-panel-visible");
  setSessionItem(messengerReadKey, String(Date.now()));
  renderMessenger();

  if (messengerInput) {
    messengerInput.focus();
  }
}

function closeMessenger() {
  if (!messengerPanel) {
    return;
  }

  messengerPanel.classList.remove("messenger-panel-visible");
  messengerPanel.classList.add("messenger-panel-hidden");
}

function handleMessengerSubmit(event) {
  event.preventDefault();

  if (!messengerRecipient || !messengerInput) {
    return;
  }

  const text = messengerInput.value.trim();
  const to = messengerRecipient.value;

  if (!text) {
    return;
  }

  const messages = loadMessengerMessages();
  messages.push({
    id: `message-${Date.now()}`,
    from: getCurrentStaffName(),
    to,
    text,
    timestamp: formatMessageTimestamp(),
    createdAt: Date.now()
  });
  saveMessengerMessages(messages);
  messengerInput.value = "";
  renderMessenger();
}

function deleteMessengerMessage(messageId) {
  const messages = loadMessengerMessages();
  const updatedMessages = messages.filter((message) => message.id !== messageId);
  saveMessengerMessages(updatedMessages);
  renderMessenger();
}

function loadMeetings() {
  const storedMeetings = localStorage.getItem(meetingsStorageKey);

  if (!storedMeetings) {
    localStorage.setItem(meetingsStorageKey, JSON.stringify(defaultMeetings));
    return [...defaultMeetings];
  }

  try {
    const meetings = JSON.parse(storedMeetings);
    return Array.isArray(meetings)
      ? meetings.map((meeting) => ({
          ...meeting,
          date: meeting.date || "",
          place: meeting.place || meeting.note || ""
        }))
      : [...defaultMeetings];
  } catch {
    localStorage.setItem(meetingsStorageKey, JSON.stringify(defaultMeetings));
    return [...defaultMeetings];
  }
}

function saveMeetings(meetings) {
  localStorage.setItem(meetingsStorageKey, JSON.stringify(meetings));
  saveCloudSharedValue(cloudSyncMeetingsPath, meetings);
}

function renderMeetingBoard() {
  const meetings = loadMeetings();

  if (meetingBoard) {
    meetingBoard.innerHTML = meetings.length
      ? meetings.map((meeting) => `
        <article class="schedule-item">
          <p class="schedule-time">${meeting.time}</p>
          <div>
            <p class="schedule-title">${meeting.title}</p>
            <p class="schedule-copy">${meeting.place || "No place set"}</p>
            <p class="meeting-notification-date">${meeting.date || "No date set"}</p>
          </div>
          <button type="button" class="btn task-delete-btn meeting-delete-btn" data-delete-meeting-id="${meeting.id}">
            Delete
          </button>
        </article>
      `).join("")
      : '<p class="task-empty">No events added yet.</p>';

    meetingBoard.querySelectorAll("[data-delete-meeting-id]").forEach((button) => {
      button.addEventListener("click", () => deleteMeeting(button.dataset.deleteMeetingId));
    });
  }

}

function deleteMeeting(meetingId) {
  const meetings = loadMeetings();
  const updatedMeetings = meetings.filter((meeting) => meeting.id !== meetingId);
  saveMeetings(updatedMeetings);
  renderMeetingBoard();
  renderNotifications();
}

function handleMeetingSubmit(event) {
  event.preventDefault();

  if (!meetingTitle || !meetingDate || !meetingTime || !meetingPlace) {
    return;
  }

  const title = meetingTitle.value.trim();
  const date = meetingDate.value.trim();
  const time = meetingTime.value.trim();
  const place = meetingPlace.value.trim();

  if (!title || !date || !time || !place) {
    return;
  }

  const meetings = loadMeetings();
  meetings.push({
    id: `meeting-${Date.now()}`,
    title,
    date,
    time,
    place
  });

  saveMeetings(meetings);
  removeSessionItem(sessionNotificationsClearedKey);
  meetingTitle.value = "";
  meetingDate.value = "";
  meetingTime.value = "";
  meetingPlace.value = "";
  renderMeetingBoard();
  renderNotifications();
}

function renderNotifications() {
  if (!notificationPanel || !notificationBoard) {
    return;
  }

  if (clearNotificationsButton) {
    clearNotificationsButton.hidden = true;
    clearNotificationsButton.style.display = "none";
  }

  const currentStaffName = getCurrentStaffName();
  const dismissedNotificationIds = new Set(getDismissedNotificationIds());
  const meetings = loadMeetings();
  const manilaNow = getManilaNow();
  const todayManilaDate = getTodayManilaDate();
  const isMondayInManila = manilaNow.getDay() === 1;
  const isFridayInManila = manilaNow.getDay() === 5;
  const isSixAmOrLaterInManila = manilaNow.getHours() >= 6;
  const isJohnDailyReminderTime = manilaNow.getHours() >= 18;
  const attendanceLog = loadAttendanceLog();
  const todayLogins = attendanceLog.filter((entry) => entry.manilaDate === todayManilaDate);
  const otherStaffLogins = todayLogins.filter((entry) => entry.staffName !== "Wendixter Cutanda");
  const latestDutyEntry = todayLogins[0];
  const notifications = [];

  if (meetings.length) {
    meetings.forEach((meeting) => {
      notifications.push({
        id: `meeting-${meeting.id}`,
        kind: "meeting",
        time: meeting.time,
        title: meeting.title,
        copy: meeting.place || "No place set",
        date: meeting.date || "No date set"
      });

      const eventDate = meeting.date || "";
      const dayBeforeEvent = eventDate ? formatIsoDate(addDays(new Date(`${eventDate}T00:00:00`), -1)) : "";

      if (eventDate && dayBeforeEvent === todayManilaDate) {
        notifications.unshift({
          id: `event-reminder-${meeting.id}-day-before`,
          kind: "attendance",
          classes: "attendance-item is-highlight attendance-item-reminder",
          title: "Event Reminder",
          time: `${meeting.title} is scheduled tomorrow.`,
          note: `${meeting.date} at ${meeting.time}${meeting.place ? ` • ${meeting.place}` : ""}`
        });
      }

      if (eventDate && eventDate === todayManilaDate && isSixAmOrLaterInManila) {
        notifications.unshift({
          id: `event-reminder-${meeting.id}-same-day`,
          kind: "attendance",
          classes: "attendance-item is-highlight attendance-item-reminder",
          title: "Today's Event Reminder",
          time: `${meeting.title} is scheduled today.`,
          note: `${meeting.date} at ${meeting.time}${meeting.place ? ` • ${meeting.place}` : ""}`
        });
      }
    });
  }

  if (currentStaffName === headOfPassengerServiceName) {
    if (attendanceLog.length) {
      attendanceLog.forEach((entry, index) => {
        notifications.push({
          id: `attendance-log-${entry.staffName}-${entry.timestamp}-${index}`,
          kind: "attendance",
          classes: "attendance-item",
          title: entry.staffName,
          time: entry.timestamp,
          note: ""
        });
      });
    } else {
      notifications.push({ id: "no-staff-login-records", kind: "empty", html: '<p class="task-empty">No staff login records yet.</p>' });
    }
  }

  if (currentStaffName === "Wendixter Cutanda") {
    if (isMondayInManila && isSixAmOrLaterInManila) {
      notifications.unshift({
        id: `wendixter-monday-reminder-${todayManilaDate}`,
        kind: "attendance",
        classes: "attendance-item is-highlight attendance-item-reminder",
        title: "Monday 6:00 AM Reminder",
        time: "Please pass the Compliance B and C to the Collector's Office today.",
        note: "This reminder is shown only on Wendixter Cutanda's account every Monday starting at 6:00 AM."
      });
    }

    if (isFridayInManila) {
      notifications.unshift({
        id: `wendixter-friday-currency-${todayManilaDate}`,
        kind: "attendance",
        classes: "attendance-item is-highlight attendance-item-reminder",
        title: "Friday Reminder",
        time: "Please update the BOC Currency Exchange today.",
        note: "This reminder is shown only on Wendixter Cutanda's account every Friday."
      });
    }

    if (isFridayInManila && isSixAmOrLaterInManila) {
      notifications.unshift({
        id: `wendixter-friday-bwc-${todayManilaDate}`,
        kind: "attendance",
        classes: "attendance-item is-highlight attendance-item-reminder",
        title: "Friday 6:00 AM Reminder",
        time: "Please pass the BWC Report to the Collector's Office today.",
        note: "This reminder is shown only on Wendixter Cutanda's account every Friday starting at 6:00 AM."
      });
    }

    if (latestDutyEntry && latestDutyEntry.staffName !== "Wendixter Cutanda") {
      notifications.unshift({
        id: `wendixter-current-duty-${latestDutyEntry.staffName}-${latestDutyEntry.timestamp}`,
        kind: "attendance",
        classes: "attendance-item is-highlight",
        title: `Current Duty Staff: ${latestDutyEntry.staffName}`,
        time: latestDutyEntry.timestamp,
        note: "Most recent login recorded for today."
      });
    }

    if (otherStaffLogins.length) {
      notifications.push(...otherStaffLogins.map((entry, index) => ({
        id: `wendixter-duty-log-${entry.staffName}-${entry.timestamp}-${index}`,
        kind: "attendance",
        classes: `attendance-item ${index === 0 ? "is-highlight" : ""}`.trim(),
        title: entry.staffName,
        time: entry.timestamp,
        note: index === 0 ? "Latest staff login for today." : "Logged in today."
      })));
    } else {
      notifications.push({ id: "wendixter-no-other-staff", kind: "empty", html: '<p class="task-empty">No other staff have logged in today yet.</p>' });
    }
  }

  if (currentStaffName === "Unfernie Pulvera" && isMondayInManila) {
    notifications.unshift({
      id: `unfernie-monday-reminder-${todayManilaDate}`,
      kind: "attendance",
      classes: "attendance-item is-highlight attendance-item-reminder",
      title: "Monday Reminder",
      time: "Please pass the Compliance A or the FCD Reporting to the Collector's Office today.",
      note: "This reminder is shown only on Unfernie Pulvera's account every Monday."
    });
  }

  if (currentStaffName === "John Benedict Andaya" && isJohnDailyReminderTime) {
    notifications.unshift({
      id: `john-daily-reminder-${todayManilaDate}`,
      kind: "attendance",
      classes: "attendance-item is-highlight attendance-item-reminder",
      title: "6:00 PM Reminder",
      time: "Please report the Daily Turnover Report to the Collector's Office.",
      note: "This reminder is shown only on John Benedict Andaya's account every day starting at 6:00 PM."
    });
  }

  const visibleNotifications = notifications.filter((notification) => !dismissedNotificationIds.has(notification.id));
  notificationPanel.hidden = false;
  notificationBoard.innerHTML = visibleNotifications.length
    ? visibleNotifications.map((notification) => notification.kind === "empty" ? notification.html : renderNotificationItem(notification)).join("")
    : '<p class="task-empty">No notifications yet.</p>';

  notificationBoard.querySelectorAll("[data-delete-notification-id]").forEach((button) => {
    button.addEventListener("click", () => deleteNotification(button.dataset.deleteNotificationId));
  });
}

function updateCurrencyExchangeQuickAccess() {
  if (!openCurrencyExchangeButton) {
    return;
  }

  const isWendixter = getCurrentStaffName() === "Wendixter Cutanda";
  openCurrencyExchangeButton.hidden = !isWendixter;
  openCurrencyExchangeButton.style.display = isWendixter ? "" : "none";

  if (!isWendixter) {
    closeCurrencyExchange();
  }
}

function updatePassengerCalculatorQuickAccess() {
  if (!openPassengerCalculatorButton) {
    return;
  }

  const isWendixter = getCurrentStaffName() === "Wendixter Cutanda";
  openPassengerCalculatorButton.hidden = !isWendixter;
  openPassengerCalculatorButton.style.display = isWendixter ? "" : "none";

  if (!isWendixter) {
    closePassengerCalculator();
  }
}

function updateTaskSummaryVisibility() {
  if (!heroTaskRow) {
    return;
  }

  const currentStaffName = getCurrentStaffName();
  const shouldHideTaskSummaries = currentStaffName === "Maria Liezl Lascota" || currentStaffName === "Jay A. Oyao";

  heroTaskRow.hidden = shouldHideTaskSummaries;
  heroTaskRow.style.display = shouldHideTaskSummaries ? "none" : "";
}

function loadTasks() {
  const storedTasks = localStorage.getItem(taskStorageKey);

  if (!storedTasks) {
    localStorage.setItem(taskStorageKey, JSON.stringify(defaultTasks));
    return [...defaultTasks];
  }

  try {
    return JSON.parse(storedTasks).map((task) => ({
      ...task,
      assignedTo: task.assignedTo || "General Queue",
      createdBy: task.createdBy || task.updatedBy || "System"
    }));
  } catch {
    localStorage.setItem(taskStorageKey, JSON.stringify(defaultTasks));
    return [...defaultTasks];
  }
}

function saveTasks(tasks) {
  localStorage.setItem(taskStorageKey, JSON.stringify(tasks));
  saveCloudSharedValue(cloudSyncTasksPath, tasks);
}

function renderTaskPreviews(tasks) {
  if (!doneTaskPreview || !pendingTaskPreview || !doneTaskCount || !pendingTaskCount) {
    return;
  }

  const currentStaffName = getCurrentStaffName();
  const doneTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);
  const assignedTasks = tasks.filter((task) => !task.completed && task.assignedTo === currentStaffName);

  doneTaskCount.textContent = String(doneTasks.length);
  pendingTaskCount.textContent = String(pendingTasks.length);

  doneTaskPreview.innerHTML = doneTasks.length
    ? doneTasks.slice(0, 2).map((task) => `
      <div class="task-preview-item">
        <p class="task-preview-title">${task.title}</p>
        <p class="task-preview-meta">Assigned to ${task.assignedTo}</p>
        <p class="task-preview-meta">Done by ${task.updatedBy}</p>
      </div>
    `).join("")
    : '<p class="task-preview-item">No completed tasks yet.</p>';

  pendingTaskPreview.innerHTML = pendingTasks.length
    ? pendingTasks.slice(0, 2).map((task) => `
      <div class="task-preview-item">
        <p class="task-preview-title">${task.title}</p>
        <p class="task-preview-meta">Assigned to ${task.assignedTo}</p>
      </div>
    `).join("")
    : '<p class="task-preview-item">No pending tasks right now.</p>';

  if (assignedTaskCount && assignedTaskPreview && assignedTaskNote) {
    assignedTaskCount.textContent = String(assignedTasks.length);
    assignedTaskPreview.innerHTML = assignedTasks.length
      ? assignedTasks.slice(0, 3).map((task) => `
        <div class="task-preview-item">
          <p class="task-preview-title">${task.title}</p>
          <p class="task-preview-meta">Created by ${task.createdBy}</p>
        </div>
      `).join("")
      : '<p class="task-preview-item">No assigned tasks for you right now.</p>';

    assignedTaskNote.textContent = assignedTasks.length
      ? "These pending tasks are assigned to the logged-in staff."
      : "No pending tasks are currently assigned to the logged-in staff.";
  }
}

function renderTaskBoard() {
  if (!taskBoard) {
    return;
  }

  const currentStaffName = getCurrentStaffName();
  const canDeleteTasks = currentStaffName === "Wendixter Cutanda";
  const tasks = loadTasks();
  renderTaskPreviews(tasks);

  if (!tasks.length) {
    taskBoard.innerHTML = '<p class="task-empty">No tasks added yet.</p>';
    return;
  }

  taskBoard.innerHTML = tasks.map((task) => `
    <article class="task-row ${task.completed ? "is-complete" : ""}">
      <span class="task-state-badge ${task.completed ? "done" : "pending"}">
        ${task.completed ? "Done" : "Pending"}
      </span>
      <button type="button" class="btn task-toggle-btn" data-task-id="${task.id}">
        ${task.completed ? "Mark Pending" : "Mark Done"}
      </button>
      <div class="task-row-copy">
        <p class="task-row-title">${task.title}</p>
        <p class="task-row-meta">Assigned to ${task.assignedTo}</p>
        <p class="task-row-meta">Created by ${task.createdBy}</p>
      </div>
      ${canDeleteTasks
        ? `<button type="button" class="btn task-delete-btn" data-delete-task-id="${task.id}">
            Delete
          </button>`
        : '<span class="task-delete-placeholder"></span>'}
    </article>
  `).join("");

  taskBoard.querySelectorAll("[data-task-id]").forEach((button) => {
    button.addEventListener("click", () => toggleTask(button.dataset.taskId));
  });

  taskBoard.querySelectorAll("[data-delete-task-id]").forEach((button) => {
    button.addEventListener("click", () => deleteTask(button.dataset.deleteTaskId));
  });
}

function toggleTask(taskId) {
  const tasks = loadTasks();
  const selectedTask = tasks.find((task) => task.id === taskId);

  if (!selectedTask) {
    return;
  }

  const updatedTasks = tasks.map((task) =>
    task.id === taskId
      ? {
          ...task,
          completed: !task.completed,
          updatedBy: getCurrentStaffName()
        }
      : task
  );

  saveTasks(updatedTasks);
  renderTaskBoard();
}

function deleteTask(taskId) {
  if (getCurrentStaffName() !== "Wendixter Cutanda") {
    return;
  }

  const tasks = loadTasks();
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  saveTasks(updatedTasks);
  renderTaskBoard();
}

function handleTaskSubmit(event) {
  event.preventDefault();

  if (!taskInput || !taskAssignee) {
    return;
  }

  const title = taskInput.value.trim();
  const assignedTo = taskAssignee.value;

  if (!title) {
    return;
  }

  const tasks = loadTasks();
  tasks.unshift({
    id: `task-${Date.now()}`,
    title,
    completed: false,
    assignedTo,
    createdBy: getCurrentStaffName(),
    updatedBy: getCurrentStaffName()
  });

  saveTasks(tasks);
  taskInput.value = "";
  taskAssignee.value = "General Queue";
  renderTaskBoard();
}

function isLoggedIn() {
  return getSessionItem(sessionAccessKey) === "granted";
}

function guardDashboard() {
  if (window.location.pathname.endsWith("dashboard.html") && !isLoggedIn()) {
    window.location.href = "index.html";
  }

  if ((window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname === "") && isLoggedIn()) {
    window.location.href = "dashboard.html";
  }
}

function handleLogin(event) {
  event.preventDefault();

  if (!usernameInput || !passwordInput || !errorElement) {
    return;
  }

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const matchedAccount = staffAccounts.find((account) =>
    account.username.toLowerCase() === username.toLowerCase() && account.password === password
  );

  if (matchedAccount) {
    authenticateCloudSessionForAccount(matchedAccount)
      .then(() => {
        const attendanceTimestamp = `Logged in: ${formatAttendanceTimestamp()}`;
        setSessionItem(sessionAccessKey, "granted");
        setSessionItem(sessionStaffNameKey, matchedAccount.name);
        setSessionItem(sessionAttendanceTimeKey, attendanceTimestamp);
        setSessionItem(messengerReadKey, String(Date.now()));
        setSessionItem(messengerLastNotifiedKey, "0");
        removeSessionItem(sessionNotificationsClearedKey);
        recordAttendanceLog(matchedAccount.name, attendanceTimestamp);
        window.location.href = "dashboard.html";
      })
      .catch(() => {
        errorElement.textContent = cloudSecureMode
          ? "Secure sign-in failed. Please contact your administrator."
          : "Unable to connect to cloud security service.";
      });
    return;
  }

  errorElement.textContent = "Invalid username or password.";
}

function handleLogout() {
  clearCloudAuthSession();
  removeSessionItem(sessionAccessKey);
  removeSessionItem(sessionStaffNameKey);
  removeSessionItem(sessionAttendanceTimeKey);
  removeSessionItem(messengerReadKey);
  removeSessionItem(messengerLastNotifiedKey);
  removeSessionItem(sessionNotificationsClearedKey);
  updateStaffDutyToggle();
  window.location.href = "index.html";
}

function enforceCloudSessionHealth() {
  if (!isCloudSyncEnabled() || !cloudSecureMode) {
    return;
  }

  if (!isLoggedIn()) {
    return;
  }

  ensureCloudAuthToken().catch(() => {
    handleLogout();
  });
}

function clearNotifications() {
  setSessionItem(sessionNotificationsClearedKey, "true");
  renderNotifications();
}

function canDeleteNotifications() {
  const currentStaffName = getCurrentStaffName();
  return currentStaffName === "Wendixter Cutanda" || currentStaffName === "Jay A. Oyao";
}

function loadDismissedNotifications() {
  try {
    const stored = JSON.parse(localStorage.getItem(dismissedNotificationsStorageKey) || "{}");
    return stored && typeof stored === "object" ? stored : {};
  } catch {
    return {};
  }
}

function getDismissedNotificationIds() {
  const allDismissed = loadDismissedNotifications();
  const currentStaffName = getCurrentStaffName();
  const ids = allDismissed[currentStaffName];
  return Array.isArray(ids) ? ids : [];
}

function saveDismissedNotificationIds(ids) {
  const allDismissed = loadDismissedNotifications();
  allDismissed[getCurrentStaffName()] = ids.slice(-100);
  localStorage.setItem(dismissedNotificationsStorageKey, JSON.stringify(allDismissed));
}

function deleteNotification(notificationId) {
  if (!canDeleteNotifications() || !notificationId) {
    return;
  }

  const dismissedIds = getDismissedNotificationIds();

  if (!dismissedIds.includes(notificationId)) {
    dismissedIds.push(notificationId);
    saveDismissedNotificationIds(dismissedIds);
  }

  renderNotifications();
}

function renderNotificationItem(notification) {
  const canDelete = canDeleteNotifications();
  const deleteButton = canDelete
    ? `<button type="button" class="btn notification-delete-btn" data-delete-notification-id="${notification.id}">Delete</button>`
    : "";

  if (notification.kind === "meeting") {
    return `
      <article class="schedule-item meeting-notification-item">
        <p class="schedule-time">${notification.time}</p>
        <div>
          <p class="schedule-title">${notification.title}</p>
          <p class="schedule-copy">${notification.copy}</p>
          <p class="meeting-notification-date">${notification.date}</p>
        </div>
        ${deleteButton}
      </article>
    `;
  }

  return `
    <article class="${notification.classes}">
      <div class="notification-copy">
        <p class="attendance-name">${notification.title}</p>
        <p class="attendance-time">${notification.time}</p>
        ${notification.note ? `<p class="attendance-note">${notification.note}</p>` : ""}
      </div>
      ${deleteButton}
    </article>
  `;
}

function showLoginCard() {
  if (!loginCard || !loginOverlay) {
    return;
  }

  loginCard.classList.remove("login-card-hidden");
  loginCard.classList.add("login-card-visible");
  loginOverlay.classList.remove("login-overlay-hidden");
  loginOverlay.classList.add("login-overlay-visible");

  if (usernameInput) {
    usernameInput.focus();
  }
}

function hideLoginCard() {
  if (!loginCard || !loginOverlay) {
    return;
  }

  loginCard.classList.remove("login-card-visible");
  loginCard.classList.add("login-card-hidden");
  loginOverlay.classList.remove("login-overlay-visible");
  loginOverlay.classList.add("login-overlay-hidden");
}

function openTaskTracker() {
  if (!taskTrackerOverlay || !taskTrackerPanel) {
    return;
  }

  taskTrackerOverlay.classList.remove("workspace-overlay-hidden");
  taskTrackerOverlay.classList.add("workspace-overlay-visible");
  taskTrackerPanel.classList.remove("task-tracker-panel-hidden");
  taskTrackerPanel.classList.add("task-tracker-panel-visible");
  document.body.classList.add("workspace-open");
}

function closeTaskTracker() {
  if (!taskTrackerOverlay || !taskTrackerPanel) {
    return;
  }

  taskTrackerOverlay.classList.remove("workspace-overlay-visible");
  taskTrackerOverlay.classList.add("workspace-overlay-hidden");
  taskTrackerPanel.classList.remove("task-tracker-panel-visible");
  taskTrackerPanel.classList.add("task-tracker-panel-hidden");
  document.body.classList.remove("workspace-open");
}

function openMeetingSchedule() {
  if (!meetingScheduleOverlay || !meetingSchedulePanel) {
    return;
  }

  meetingScheduleOverlay.classList.remove("workspace-overlay-hidden");
  meetingScheduleOverlay.classList.add("workspace-overlay-visible");
  meetingSchedulePanel.classList.remove("task-tracker-panel-hidden");
  meetingSchedulePanel.classList.add("task-tracker-panel-visible");
  document.body.classList.add("workspace-open");
}

function closeMeetingSchedule() {
  if (!meetingScheduleOverlay || !meetingSchedulePanel) {
    return;
  }

  meetingScheduleOverlay.classList.remove("workspace-overlay-visible");
  meetingScheduleOverlay.classList.add("workspace-overlay-hidden");
  meetingSchedulePanel.classList.remove("task-tracker-panel-visible");
  meetingSchedulePanel.classList.add("task-tracker-panel-hidden");
  document.body.classList.remove("workspace-open");
}

function canEditCurrencyExchange() {
  return getCurrentStaffName() === "Wendixter Cutanda";
}

function openCurrencyExchange() {
  if (!currencyExchangeOverlay || !currencyExchangePanel || !canEditCurrencyExchange()) {
    return;
  }

  renderCurrencyExchange(loadCurrencyExchangeData());
  updateCurrencyExchangeRangeLabel();

  currencyExchangeOverlay.classList.remove("workspace-overlay-hidden");
  currencyExchangeOverlay.classList.add("workspace-overlay-visible");
  currencyExchangePanel.classList.remove("task-tracker-panel-hidden");
  currencyExchangePanel.classList.add("task-tracker-panel-visible");
  document.body.classList.add("workspace-open");
}

window.openCurrencyExchangePanel = openCurrencyExchange;

function closeCurrencyExchange() {
  if (!currencyExchangeOverlay || !currencyExchangePanel) {
    return;
  }

  currencyExchangeOverlay.classList.remove("workspace-overlay-visible");
  currencyExchangeOverlay.classList.add("workspace-overlay-hidden");
  currencyExchangePanel.classList.remove("task-tracker-panel-visible");
  currencyExchangePanel.classList.add("task-tracker-panel-hidden");
  document.body.classList.remove("workspace-open");
}

function openPassengerCalculator() {
  if (!passengerCalculatorOverlay || !passengerCalculatorPanel || getCurrentStaffName() !== "Wendixter Cutanda") {
    return;
  }

  passengerCalculatorOverlay.classList.remove("workspace-overlay-hidden");
  passengerCalculatorOverlay.classList.add("workspace-overlay-visible");
  passengerCalculatorPanel.classList.remove("task-tracker-panel-hidden");
  passengerCalculatorPanel.classList.add("task-tracker-panel-visible");
  document.body.classList.add("workspace-open");
}

function closePassengerCalculator() {
  if (!passengerCalculatorOverlay || !passengerCalculatorPanel) {
    return;
  }

  passengerCalculatorOverlay.classList.remove("workspace-overlay-visible");
  passengerCalculatorOverlay.classList.add("workspace-overlay-hidden");
  passengerCalculatorPanel.classList.remove("task-tracker-panel-visible");
  passengerCalculatorPanel.classList.add("task-tracker-panel-hidden");
  document.body.classList.remove("workspace-open");
}

function printPassengerCalculator() {
  if (!passengerCalculatorPanel) {
    return;
  }

  syncPassengerCalculatorPrintDetails();
  document.body.classList.add("printing-calculator");
  window.print();
  window.setTimeout(() => {
    document.body.classList.remove("printing-calculator");
  }, 200);
}

function formatCalculatorResult(value) {
  if (!Number.isFinite(value)) {
    return "--";
  }

  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 2
  }).format(value);
}

function formatWholeCalculatorResult(value) {
  if (!Number.isFinite(value)) {
    return "--";
  }

  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0
  }).format(Math.round(value));
}

function formatCalculatorPrintTimestamp() {
  return new Intl.DateTimeFormat("en-PH", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
}

function syncPassengerCalculatorPrintDetails() {
  if (calculatorPrintTimestamp) {
    calculatorPrintTimestamp.textContent = `Generated on ${formatCalculatorPrintTimestamp()} (Manila time)`;
  }

  if (printPassengerName) {
    printPassengerName.textContent = calculatorPassengerName?.value.trim() || "--";
  }

  if (printFlightNumber) {
    printFlightNumber.textContent = calculatorFlightNumber?.value.trim() || "--";
  }

  if (printCommodity) {
    printCommodity.textContent = calculatorCommodity?.value.trim() || "--";
  }

  if (printCurrencyUsed) {
    printCurrencyUsed.textContent = calculatorCurrency?.value || "--";
  }

  if (printCommodityValue) {
    const value = Number(calculatorCommodityValue?.value);
    printCommodityValue.textContent = Number.isFinite(value)
      ? new Intl.NumberFormat("en-PH", { maximumFractionDigits: 2 }).format(value)
      : "--";
  }

  if (printExchangeRate) {
    const value = Number(calculatorExchangeRate?.value);
    printExchangeRate.textContent = Number.isFinite(value) ? formatCalculatorResult(value) : "--";
  }

  if (printDutyRate) {
    const value = Number(calculatorDutyRate?.value);
    printDutyRate.textContent = Number.isFinite(value) ? `${value}%` : "--";
  }

  if (printSurchargeStatus) {
    printSurchargeStatus.textContent = calculatorSurcharge?.checked ? "Applicable" : "Not Applicable";
  }
}

function getImportProcessingCharge(dutiableValue) {
  if (dutiableValue <= 25000) return 250;
  if (dutiableValue <= 50000) return 500;
  if (dutiableValue <= 250000) return 750;
  if (dutiableValue <= 500000) return 1000;
  if (dutiableValue <= 750000) return 1500;
  return 2000;
}

function getBocCurrencyRate(currencyCode) {
  if (currencyCode === "PHP") {
    return 1;
  }

  const publishedRates = loadCurrencyExchangeData()?.rates || [];
  const matchedRate = publishedRates.find((rate) => rate.code === currencyCode);

  if (!matchedRate) {
    return null;
  }

  const numericRate = Number(String(matchedRate.value || "").replace(/,/g, ""));
  return Number.isFinite(numericRate) ? numericRate : null;
}

function updateCalculatorExchangeRate() {
  if (!calculatorCurrency || !calculatorExchangeRate || !calculatorSummary) {
    return;
  }

  const currencyCode = calculatorCurrency.value;

  if (!currencyCode) {
    calculatorExchangeRate.value = "";
    return;
  }

  const rate = getBocCurrencyRate(currencyCode);

  if (!Number.isFinite(rate)) {
    calculatorExchangeRate.value = "";
    calculatorSummary.textContent = `No BOC exchange rate is currently published for ${currencyCode}.`;
    return;
  }

  calculatorExchangeRate.value = String(rate);
  calculatorSummary.textContent = `BOC exchange rate for ${currencyCode} loaded automatically.`;
}

function handlePassengerCalculator(event) {
  event.preventDefault();

  if (!calculatorCommodityValue || !calculatorExchangeRate || !calculatorDutyRate || !calculatorExciseTax || !calculatorSummary) {
    return;
  }

  const commodityValue = Number(calculatorCommodityValue.value);
  const exchangeRate = Number(calculatorExchangeRate.value);
  const dutyRatePercent = Number(calculatorDutyRate.value);
  const exciseTaxValue = Number(calculatorExciseTax.value);

  if (!Number.isFinite(commodityValue) || !Number.isFinite(exchangeRate) || !Number.isFinite(dutyRatePercent) || !Number.isFinite(exciseTaxValue)) {
    calculatorSummary.textContent = "Enter complete and valid passenger calculator values.";
    return;
  }

  const dutiableValue = commodityValue * exchangeRate;
  const customsDutiesValue = dutiableValue * (dutyRatePercent / 100);
  const cdsDstValue = 130;
  const importProcessingChargeValue = getImportProcessingCharge(dutiableValue);
  const landedCostValue = dutiableValue + customsDutiesValue + cdsDstValue + importProcessingChargeValue;
  const vatValue = (landedCostValue + exciseTaxValue) * 0.12;
  const surchargeValue = calculatorSurcharge?.checked ? landedCostValue * 0.30 : 0;
  const amountDueValue = customsDutiesValue + vatValue + importProcessingChargeValue + cdsDstValue + exciseTaxValue + surchargeValue;

  if (calculatorDutiableValue) calculatorDutiableValue.textContent = formatCalculatorResult(dutiableValue);
  if (calculatorCustomsDuties) calculatorCustomsDuties.textContent = formatCalculatorResult(customsDutiesValue);
  if (calculatorCdsDst) calculatorCdsDst.textContent = formatCalculatorResult(cdsDstValue);
  if (calculatorImportProcessingCharge) calculatorImportProcessingCharge.textContent = formatCalculatorResult(importProcessingChargeValue);
  if (calculatorLandedCost) calculatorLandedCost.textContent = formatCalculatorResult(landedCostValue);
  if (calculatorExciseTaxDisplay) calculatorExciseTaxDisplay.textContent = formatCalculatorResult(exciseTaxValue);
  if (calculatorVat) calculatorVat.textContent = formatCalculatorResult(vatValue);
  if (calculatorSummaryCustomsDuties) calculatorSummaryCustomsDuties.textContent = formatWholeCalculatorResult(customsDutiesValue);
  if (calculatorSummaryVat) calculatorSummaryVat.textContent = formatWholeCalculatorResult(vatValue);
  if (calculatorSummaryImportProcessingCharge) calculatorSummaryImportProcessingCharge.textContent = formatWholeCalculatorResult(importProcessingChargeValue);
  if (calculatorSummaryCdsDst) calculatorSummaryCdsDst.textContent = formatWholeCalculatorResult(cdsDstValue);
  if (calculatorSummaryExciseTax) calculatorSummaryExciseTax.textContent = formatWholeCalculatorResult(exciseTaxValue);
  if (calculatorSummarySurcharge) calculatorSummarySurcharge.textContent = formatWholeCalculatorResult(surchargeValue);
  if (calculatorAmountDue) calculatorAmountDue.textContent = formatWholeCalculatorResult(amountDueValue);

  if (calculatorSummary) {
    calculatorSummary.textContent = `${calculatorPassengerName?.value || "Passenger"} | ${calculatorFlightNumber?.value || "No flight"} | ${calculatorCommodity?.value || "No commodity"} | ${calculatorCurrency?.value || "No currency"}`;
  }

  syncPassengerCalculatorPrintDetails();
}

function openWorkspace(button) {
  if (!workspaceOverlay || !workspacePanel || !workspaceFrame || !workspaceTitle) {
    return;
  }

  const title = button.dataset.workspaceTitle || "Workspace";
  const url = button.dataset.workspaceUrl || "";

  workspaceTitle.textContent = title;
  workspaceFrame.src = url;
  workspaceOverlay.classList.remove("workspace-overlay-hidden");
  workspaceOverlay.classList.add("workspace-overlay-visible");
  workspacePanel.classList.remove("workspace-panel-hidden");
  workspacePanel.classList.add("workspace-panel-visible");
  document.body.classList.add("workspace-open");
}

function closeWorkspace() {
  if (!workspaceOverlay || !workspacePanel || !workspaceFrame) {
    return;
  }

  workspaceOverlay.classList.remove("workspace-overlay-visible");
  workspaceOverlay.classList.add("workspace-overlay-hidden");
  workspacePanel.classList.remove("workspace-panel-visible");
  workspacePanel.classList.add("workspace-panel-hidden");
  workspaceFrame.src = "";
  document.body.classList.remove("workspace-open");
}

function updateTopbarCompactState() {
  if (!topbar) {
    return;
  }

  if (window.scrollY > 24) {
    topbar.classList.add("is-compact");
    return;
  }

  topbar.classList.remove("is-compact");
}

function loadCurrencyExchangeData() {
  try {
    const stored = JSON.parse(localStorage.getItem(currencyExchangeStorageKey) || "null");
    return Array.isArray(stored?.rates) ? stored : null;
  } catch {
    return null;
  }
}

function saveCurrencyExchangeData(data) {
  localStorage.setItem(currencyExchangeStorageKey, JSON.stringify(data));
  saveCloudSharedValue(cloudSyncCurrencyExchangePath, data);
}

function loadCurrencyExchangeDraftData() {
  try {
    const stored = JSON.parse(localStorage.getItem(currencyExchangeDraftKey) || "null");
    return Array.isArray(stored?.rates) ? stored : null;
  } catch {
    return null;
  }
}

function saveCurrencyExchangeDraftData(data) {
  localStorage.setItem(currencyExchangeDraftKey, JSON.stringify(data));
}

function getCurrencyEditorRows(includeEmpty = false) {
  if (!currencyExchangeEditor) {
    return [];
  }

  return Array.from(currencyExchangeEditor.querySelectorAll(".currency-exchange-editor-row"))
    .map((row) => {
      const codeInput = row.querySelector("[data-currency-code]");
      const rateInput = row.querySelector("[data-currency-rate]");
      return {
        code: codeInput?.value.trim().toUpperCase() || "",
        value: rateInput?.value.trim() || ""
      };
    });
}

function getCurrencyEditorRates() {
  return getCurrencyEditorRows().filter((rate) => rate.code && rate.value);
}

function saveCurrentCurrencyExchangeDraft() {
  if (!canEditCurrencyExchange()) {
    return;
  }

  const publishedData = loadCurrencyExchangeData();
  const existingDraft = loadCurrencyExchangeDraftData();
  const rates = getCurrencyEditorRates();

  saveCurrencyExchangeDraftData({
    fileName: existingDraft?.fileName || publishedData?.fileName || "manual entry",
    extractedAt: Date.now(),
    rawText: existingDraft?.rawText || publishedData?.rawText || "",
    rates
  });
}

function renderCurrencyExchangeEditor(rates = []) {
  if (!currencyExchangeEditor) {
    return;
  }

  if (!canEditCurrencyExchange()) {
    currencyExchangeEditor.hidden = true;
    currencyExchangeEditor.innerHTML = "";
    return;
  }

  currencyExchangeEditor.hidden = false;

  const rows = rates.length ? rates : [{ code: "", value: "" }];

  currencyExchangeEditor.innerHTML = rows.map((rate, index) => `
    <div class="currency-exchange-editor-row" data-editor-row="${index}">
      ${rate.code
        ? `<input
             type="text"
             value="${rate.code}"
             maxlength="3"
             class="currency-exchange-code-locked"
             data-currency-code
             readonly>`
        : `<input type="text" value="${rate.code}" placeholder="Code" maxlength="3" data-currency-code>`}
      <input type="text" value="${rate.value}" placeholder="Rate" data-currency-rate>
      <button type="button" class="btn currency-exchange-remove-btn" data-remove-currency-row="${index}">Remove</button>
    </div>
  `).join("");

  currencyExchangeEditor.querySelectorAll("[data-remove-currency-row]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextRates = getCurrencyEditorRates();
      nextRates.splice(Number(button.dataset.removeCurrencyRow), 1);
      saveCurrencyExchangeDraftData({
        fileName: loadCurrencyExchangeDraftData()?.fileName || loadCurrencyExchangeData()?.fileName || "manual entry",
        extractedAt: Date.now(),
        rawText: loadCurrencyExchangeDraftData()?.rawText || loadCurrencyExchangeData()?.rawText || "",
        rates: nextRates
      });
      renderCurrencyExchangeEditor(nextRates);
    });
  });

  currencyExchangeEditor.querySelectorAll("[data-currency-code], [data-currency-rate]").forEach((input) => {
    input.addEventListener("input", saveCurrentCurrencyExchangeDraft);
  });
}

function renderCurrencyExchange(data = loadCurrencyExchangeData()) {
  if (!currencyExchangeStatus || !currencyExchangeList) {
    return;
  }

  const canEdit = canEditCurrencyExchange();
  const publishedData = data;
  const draftData = canEdit ? loadCurrencyExchangeDraftData() : null;
  const editorData = canEdit ? (draftData || publishedData) : null;

  if (currencyExchangeEditActions) {
    currencyExchangeEditActions.hidden = !canEdit;
    currencyExchangeEditActions.style.display = canEdit ? "flex" : "none";
  }

  if (currencyExchangeDebug) {
    currencyExchangeDebug.hidden = !canEdit;
    currencyExchangeDebug.style.display = canEdit ? "" : "none";
  }

  if (!publishedData || !publishedData.rates.length) {
    updateCurrencyExchangeRangeLabel();

    if (!canEdit && currencyExchangeStatus) {
      currencyExchangeStatus.textContent = "No final currency exchange has been saved yet.";
    }
    currencyExchangeList.innerHTML = "";
    renderCurrencyExchangeEditor(editorData?.rates || []);
    return;
  }

  updateCurrencyExchangeRangeLabel();
  currencyExchangeList.innerHTML = publishedData.rates.map((rate) => `
    <div class="currency-exchange-item">
      <div class="currency-exchange-copy">
        <p class="currency-exchange-code">${rate.code}</p>
        <p class="currency-exchange-rate">${rate.value}</p>
      </div>
    </div>
  `).join("");

  renderCurrencyExchangeEditor(editorData?.rates || publishedData.rates);
}

function parseCurrencyExchangeText(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const rates = [];
  const seenCodes = new Set();

  const normalizeOcrLine = (line) => line
    .replace(/\b5GD\b/gi, "SGD")
    .replace(/\bHXD\b/gi, "HKD")
    .replace(/\bUSO\b/gi, "USD")
    .replace(/\bJPV\b/gi, "JPY")
    .replace(/\bEUF\b/gi, "EUR")
    .replace(/\s+/g, " ")
    .trim();

  const extractRateValue = (line) => {
    const matches = line.match(/\d{1,4}(?:[.,]\d{1,6})/g);

    if (!matches?.length) {
      return null;
    }

    return matches[matches.length - 1].replace(",", ".");
  };

  const resolveCurrencyCode = (line) => {
    const knownCurrency = knownCurrencyPatterns.find((currency) => currency.pattern.test(line));

    if (knownCurrency) {
      return knownCurrency.code;
    }

    const explicitCode = line.match(/\b[A-Z]{3}\b/);
    return explicitCode ? explicitCode[0] : null;
  };

  const candidateLines = lines.flatMap((line, index) => {
    const currentLine = normalizeOcrLine(line);
    const nextLine = lines[index + 1] ? normalizeOcrLine(lines[index + 1]) : "";
    return nextLine ? [currentLine, `${currentLine} ${nextLine}`] : [currentLine];
  });

  candidateLines.forEach((line) => {
    const code = resolveCurrencyCode(line);
    const value = extractRateValue(line);

    if (!code || !value || seenCodes.has(code)) {
      return;
    }

    seenCodes.add(code);
    rates.push({
      code,
      value
    });
  });

  return rates;
}

async function extractTextFromPdf(file) {
  if (!window.pdfjsLib) {
    throw new Error("PDF library unavailable");
  }

  if (!window.Tesseract) {
    throw new Error("OCR library unavailable");
  }

  window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.4.168/build/pdf.worker.min.js";
  const fileBuffer = await file.arrayBuffer();
  const pdf = await window.pdfjsLib.getDocument({ data: fileBuffer }).promise;
  const textChunks = [];

  for (let pageIndex = 1; pageIndex <= pdf.numPages; pageIndex += 1) {
    const page = await pdf.getPage(pageIndex);
    const content = await page.getTextContent();
    const pageText = content.items.map((item) => item.str).join(" ");
    textChunks.push(pageText);

    if (pageText.trim().length >= 20) {
      continue;
    }

    const viewport = page.getViewport({ scale: 2 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      continue;
    }

    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);

    await page.render({
      canvasContext: context,
      viewport
    }).promise;

    const ocrResult = await window.Tesseract.recognize(canvas, "eng");
    const ocrText = ocrResult.data.text || "";

    if (ocrText.trim()) {
      textChunks.push(ocrText);
    }
  }

  return textChunks.join("\n");
}

async function handleCurrencyExchangeUpload(event) {
  const file = event.target.files?.[0];

  if (!file || !currencyExchangeStatus) {
    return;
  }

  const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
  currencyExchangeStatus.textContent = isPdf
    ? "Reading PDF and extracting currency exchange rates..."
    : "Reading screenshot and extracting currency exchange rates...";

  try {
    let extractedText = "";

    if (isPdf) {
      extractedText = await extractTextFromPdf(file);

      if (!extractedText.trim()) {
        currencyExchangeStatus.textContent = "This PDF could not be read. Try a clearer PDF or upload a screenshot instead.";
        return;
      }
    } else {
      if (!window.Tesseract) {
        currencyExchangeStatus.textContent = "OCR library could not be loaded. Please check your internet connection and try again.";
        return;
      }

      const result = await window.Tesseract.recognize(file, "eng");
      extractedText = result.data.text || "";
    }

    const rates = parseCurrencyExchangeText(extractedText);

    if (!rates.length) {
      currencyExchangeStatus.textContent = isPdf
        ? "No currency exchange rates were detected in the PDF. Try a clearer PDF page or upload a cropped screenshot of the exchange table."
        : "No currency exchange rates were detected. Try a clearer screenshot.";
      return;
    }

    const data = {
      fileName: file.name,
      extractedAt: Date.now(),
      rawText: extractedText,
      rates
    };

    saveCurrencyExchangeData(data);
    renderCurrencyExchange(data);
  } catch {
    currencyExchangeStatus.textContent = isPdf
      ? "The PDF could not be processed. Try a text-based PDF or upload a screenshot instead."
      : "The screenshot could not be processed. Try uploading a clearer image.";
  } finally {
    if (currencyExchangeInput) {
      currencyExchangeInput.value = "";
    }
  }
}

function handleAddCurrencyRow() {
  if (!canEditCurrencyExchange()) {
    return;
  }

  const nextRates = getCurrencyEditorRows(true);
  nextRates.push({ code: "", value: "" });
  saveCurrencyExchangeDraftData({
    fileName: loadCurrencyExchangeDraftData()?.fileName || loadCurrencyExchangeData()?.fileName || "manual entry",
    extractedAt: Date.now(),
    rawText: loadCurrencyExchangeDraftData()?.rawText || loadCurrencyExchangeData()?.rawText || "",
    rates: nextRates
  });
  renderCurrencyExchangeEditor(nextRates);
  updateCurrencyExchangeRangeLabel();
}

function handleSaveCurrencyExchange() {
  if (!canEditCurrencyExchange()) {
    return;
  }

  const publishedData = loadCurrencyExchangeData();
  const draftData = loadCurrencyExchangeDraftData();
  const rates = getCurrencyEditorRates();

  if (!rates.length) {
    if (currencyExchangeStatus) {
      currencyExchangeStatus.textContent = "Add at least one currency rate before publishing.";
    }
    return;
  }

  const data = {
    fileName: draftData?.fileName || publishedData?.fileName || "manual entry",
    extractedAt: Date.now(),
    rawText: draftData?.rawText || publishedData?.rawText || "",
    rates
  };

  saveCurrencyExchangeDraftData(data);
  saveCurrencyExchangeData(data);
  renderCurrencyExchange(data);
  updateCurrencyExchangeRangeLabel();
}

function runStartupStep(stepName, stepHandler) {
  try {
    stepHandler();
  } catch (error) {
    console.error(`Startup step failed: ${stepName}`, error);

    if (securityStatusElement) {
      securityStatusElement.textContent = "Some dashboard features failed to load. Core login is still available.";
      securityStatusElement.classList.add("is-warning");
    }
  }
}

[
  ["guardDashboard", guardDashboard],
  ["resetSavedCurrencyExchangeOnce", resetSavedCurrencyExchangeOnce],
  ["updateLoginClock", updateLoginClock],
  ["updateDashboardClock", updateDashboardClock],
  ["rotateStatus", rotateStatus],
  ["updateDailyQuote", updateDailyQuote],
  ["updateAverageFlights", updateAverageFlights],
  ["updateCurrencyExchangeRangeLabel", updateCurrencyExchangeRangeLabel],
  ["updateStaffOnDuty", updateStaffOnDuty],
  ["renderSecurityStatusNotice", renderSecurityStatusNotice],
  ["renderTaskBoard", renderTaskBoard],
  ["renderMeetingBoard", renderMeetingBoard],
  ["renderNotifications", renderNotifications],
  ["updateCurrencyExchangeQuickAccess", updateCurrencyExchangeQuickAccess],
  ["updatePassengerCalculatorQuickAccess", updatePassengerCalculatorQuickAccess],
  ["updateTaskSummaryVisibility", updateTaskSummaryVisibility],
  ["renderMessenger", renderMessenger],
  ["renderCurrencyExchange", renderCurrencyExchange],
  ["startCloudSyncPolling", startCloudSyncPolling],
  ["enforceCloudSessionHealth", enforceCloudSessionHealth],
  ["loadQuickSidebarPosition", loadQuickSidebarPosition],
  ["enableQuickSidebarDrag", enableQuickSidebarDrag],
  ["scheduleWeeklyFlightsRefresh", scheduleWeeklyFlightsRefresh],
  ["updateTopbarCompactState", updateTopbarCompactState]
].forEach(([stepName, stepHandler]) => {
  runStartupStep(stepName, stepHandler);
});

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
}

if (taskForm) {
  taskForm.addEventListener("submit", handleTaskSubmit);
}

if (openTaskTrackerButton) {
  openTaskTrackerButton.addEventListener("click", openTaskTracker);
}

if (taskTrackerOverlay) {
  taskTrackerOverlay.addEventListener("click", closeTaskTracker);
}

if (closeTaskTrackerButton) {
  closeTaskTrackerButton.addEventListener("click", closeTaskTracker);
}

if (meetingForm) {
  meetingForm.addEventListener("submit", handleMeetingSubmit);
}

if (openMeetingScheduleButton) {
  openMeetingScheduleButton.addEventListener("click", openMeetingSchedule);
}

if (meetingScheduleOverlay) {
  meetingScheduleOverlay.addEventListener("click", closeMeetingSchedule);
}

if (closeMeetingScheduleButton) {
  closeMeetingScheduleButton.addEventListener("click", closeMeetingSchedule);
}

if (openCurrencyExchangeButton) {
  openCurrencyExchangeButton.addEventListener("click", openCurrencyExchange);
}

if (currencyExchangeOverlay) {
  currencyExchangeOverlay.addEventListener("click", closeCurrencyExchange);
}

if (closeCurrencyExchangeButton) {
  closeCurrencyExchangeButton.addEventListener("click", closeCurrencyExchange);
}

if (openPassengerCalculatorButton) {
  openPassengerCalculatorButton.addEventListener("click", openPassengerCalculator);
}

if (passengerCalculatorOverlay) {
  passengerCalculatorOverlay.addEventListener("click", closePassengerCalculator);
}

if (closePassengerCalculatorButton) {
  closePassengerCalculatorButton.addEventListener("click", closePassengerCalculator);
}

if (printPassengerCalculatorButton) {
  printPassengerCalculatorButton.addEventListener("click", printPassengerCalculator);
}

if (passengerCalculatorForm) {
  passengerCalculatorForm.addEventListener("submit", handlePassengerCalculator);
}

if (calculatorCurrency) {
  calculatorCurrency.addEventListener("change", updateCalculatorExchangeRate);
}

if (addCurrencyRowButton) {
  addCurrencyRowButton.addEventListener("click", handleAddCurrencyRow);
}

if (saveCurrencyExchangeButton) {
  saveCurrencyExchangeButton.addEventListener("click", handleSaveCurrencyExchange);
}

if (staffDutyToggle) {
  staffDutyToggle.addEventListener("click", toggleStaffDutyStatus);
}

if (clearNotificationsButton) {
  clearNotificationsButton.addEventListener("click", clearNotifications);
}

if (messengerForm) {
  messengerForm.addEventListener("submit", handleMessengerSubmit);
}

if (messengerRecipient) {
  messengerRecipient.addEventListener("change", renderMessenger);
}

if (openLoginButton) {
  openLoginButton.addEventListener("click", showLoginCard);
}

if (loginOverlay) {
  loginOverlay.addEventListener("click", hideLoginCard);
}

workspaceButtons.forEach((button) => {
  button.addEventListener("click", () => openWorkspace(button));
});

if (workspaceOverlay) {
  workspaceOverlay.addEventListener("click", closeWorkspace);
}

if (closeWorkspaceButton) {
  closeWorkspaceButton.addEventListener("click", closeWorkspace);
}

if (logoutButton) {
  logoutButton.addEventListener("click", handleLogout);
}

if (messengerClose) {
  messengerClose.addEventListener("click", closeMessenger);
}

setInterval(updateLoginClock, 1000);
setInterval(updateDashboardClock, 1000);
setInterval(rotateStatus, 8000);
setInterval(enforceCloudSessionHealth, 30000);
["pointerdown", "keydown"].forEach((eventName) => {
  window.addEventListener(eventName, ensureMessengerAudioReady, { once: true });
});
window.addEventListener("scroll", updateTopbarCompactState);
window.addEventListener("storage", (event) => {
  if (event.key === messengerStorageKey) {
    renderMessenger();
    notifyForNewMessengerMessages();
    return;
  }

  if (event.key === attendanceLogKey) {
    renderNotifications();
    return;
  }

  if (event.key === staffDutyStorageKey) {
    updateStaffOnDuty();
    return;
  }

  if (event.key === meetingsStorageKey) {
    renderMeetingBoard();
    renderNotifications();
    return;
  }

  if (event.key === currencyExchangeStorageKey || event.key === currencyExchangeDraftKey) {
    renderCurrencyExchange();
    return;
  }

  renderMessenger();
});
