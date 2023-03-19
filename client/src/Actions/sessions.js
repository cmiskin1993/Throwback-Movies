export const signup = (details, navigate) => {
  return async (dispatch) => {
    dispatch({ type: "REQUESTING" });

    const resp = await fetch("/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });

    const data = await resp.json();
    if (!resp.ok) {
      dispatch({ type: "ERRORS", payload: data.errors });
    } else {
      // console.log(data)
      dispatch({ type: "CLEAR_ERRORS" });
      dispatch({ type: "LOGIN", payload: data });
      navigate("/");
    }
    dispatch({ type: "DONE_REQUESTING" });

    return data;
  };
};

export const login = (details, navigate) => {
  return async (dispatch) => {
    dispatch({ type: "REQUESTING" });
    const resp = await fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });

    const data = await resp.json();

    if (!resp.ok) {
      dispatch({ type: "ERRORS", payload: data.errors });
    } else {
      // console.log(data)
      dispatch({ type: "CLEAR_ERRORS" });
      dispatch({ type: "LOGIN", payload: data });
      navigate("/");
    }
    dispatch({ type: "DONE_REQUESTING" });

    return data;
  };
};

export const getCurrentUser = () => {
  return async (dispatch) => {
    dispatch({ type: "REQUESTING" });
    const resp = await fetch("/authorized_user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(async (resp) => {
        const data = await resp.json();
        if (resp.ok) {
          dispatch({ type: "LOGIN", payload: data });
        } else {
          dispatch({ type: "LOGOUT" });
        }
      })
      .catch((err) => {
        console.error(err);
      });
    // const data = await resp.json();
    // const payload = {
    //   user: data.user,
    // }

    // if(data.user) {
    //   dispatch({ type: "LOGIN", payload })
    // }
    dispatch({ type: "DONE_REQUESTING" });
  };
};

export const logout = (navigate) => {
  return async (dispatch) => {
    dispatch({ type: "REQUESTING" });
    const resp = await fetch("/logout", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(async (resp) => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => {
        console.error(err);
      });
    // const data = await resp.json();
    // const payload = {
    //   user: data.user,
    // }

    // if(data.user) {
    //   dispatch({ type: "LOGIN", payload })
    // }
    dispatch({ type: "DONE_REQUESTING" });
    navigate("/");
  };
  // return {
  //   type: "LOGOUT"
  // };
};
