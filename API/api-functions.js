const BASE_URL = "https://sowlab.com/assignment";
async function apiRequest(endpoint, params) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: { "Content-Type": "application/json" },
    });
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.log("Error in API request", err);
    return null;
  }
}
export async function signUp(
  full_name,
  email,
  phone,
  password,
  business_name,
  informal_name,
  address,
  city,
  state,
  zip_code,
  registration_proof,
  business_hours,
  role = "farmer",
  device_token = "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
  type = "email/facebook/google/apple",
  social_id = "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
) {
  // send request to API
  const response = await apiRequest(`/user/register`, {
    full_name,
    email,
    phone,
    password,
    role,
    business_name,
    informal_name,
    address,
    city,
    state,
    zip_code,
    registration_proof,
    business_hours,
    device_token,
    type,
    social_id,
  });
  return response;
}
export async function login(
  email,
  password,
  role = "farmer",
  device_token = "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
  type = "email/facebook/google/apple",
  social_id = "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
) {
  const response = await apiRequest(`/user/login`, {
    email,
    password,
    role,
    device_token,
    type,
    social_id,
  });
  return response;
}
export async function forgotPassword(mobile) {
  const response = await apiRequest(`/user/forgot-password`, { mobile });
  return response;
}
export async function verifyOTP(otp) {
  const response = await apiRequest(`/user/verify-otp`, { otp });
  return response;
}
export async function resetPassword(password, cpassword, token = "895642") {
  const response = await apiRequest(`/user/reset-password`, {
    token,
    password,
    cpassword,
  });
  return response;
}
