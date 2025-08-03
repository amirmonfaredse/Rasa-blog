import toast from "react-hot-toast";

export function notifCreateBlog(isMutating: boolean, res: any, error: any) {
  if (isMutating)
    toast.loading("در حال بارگذاری ...", { id: "create-blog-toast" });
  if (res)
    toast.success("پست با موفقیت ایجاد شد", {
      id: "create-blog-toast",
    });
  if (error)
    toast.error("در ایجاد پست مشکلی ایجاد شده است", {
      id: "create-blog-toast",
    });
}
export function notifCategorizing(isMutating: boolean, res: any, error: any) {
  if (isMutating)
    toast.loading("درحال دسته بندی ...", { id: "categorizing-blog-toast" });
  if (res)
    toast.success("دسته بندی پست با موفقیت انجام شد", {
      id: "categorizing-blog-toast",
    });
  if (error)
    toast.error("در دسته بندی کردن مشکلی ایجاد شده است", {
      id: "categorizing-blog-toast",
    });
}
export function notifTagging(isMutating: boolean, res: any, error: any) {
  if (isMutating)
    toast.loading("درحال برچسب گذاری ...", { id: "tagging-blog-toast" });
  if (res)
    toast.success("برچسب گذاری  پست با موفقیت انجام شد", {
      id: "tagging-blog-toast",
    });
  if (error)
    toast.error("در برچسب گذاری مشکلی ایجاد شده است", {
      id: "tagging-blog-toast",
    });
}

export function notifCreateImage(isMutating: boolean, res: any, error: any) {
  if (isMutating)
    toast.loading("درحال بارگذاری تصویر ...", { id: "upload-image-toast" });
  if (res)
    toast.success("بارگذاری تصویر با موفقیت انجام شد", {
      id: "upload-image-toast",
    });
  if (error)
    toast.error("در بارگذاری تصویر مشکلی ایجاد شده است", {
      id: "upload-image-toast",
    });
}

export function notifUpdateBlog(isMutating: boolean, res: any, error: any) {
  if (isMutating)
    toast.loading("در حال بارگذاری ...", { id: "update-blog-toast" });
  if (res)
    toast.success("پست با موفقیت ویرایش شد", {
      id: "update-blog-toast",
    });
  if (error)
    toast.error("در ویرایش پست مشکلی ایجاد شده است", {
      id: "update-blog-toast",
    });
}

export function notifSendMessage(isMutating: boolean, res: any, error: any) {
  if (isMutating)
    toast.loading("در حال ارسال ...", { id: "send-message-toast" });
  if (res)
    toast.success("پیام شما با موفقیت ارسال شد", {
      id: "send-message-toast",
    });
  if (error)
    toast.error("در ارسال پیام مشکلی ایجاد شده است", {
      id: "send-message-toast",
    });
}
export function notifSendComment(isMutating: boolean, res: any, error: any) {
  if (isMutating)
    toast.loading("در حال ارسال ...", { id: "send-comment-toast" });
  if (res)
    toast.success(
      "نظر شما با موفقیت ثبت شد ، بعد از تایید نمایش داده خواهد شد",
      {
        id: "send-comment-toast",
      }
    );
  if (error)
    toast.error("در ثبت نظر مشکلی ایجاد شده است", {
      id: "send-comment-toast",
    });
}
export function notifCreateCategory(isMutating: boolean, res: any, error: any) {
  if (isMutating)
    toast.loading("در حال ایجاد دسته بندی ...", {
      id: "create-category-toast",
    });
  if (res)
    toast.success("دسته بندی جدید با موفقیت اضافه شد", {
      id: "create-category-toast",
    });
  if (error)
    toast.error("در ایجاد دسته بندی جدید مشکلی ایجاد شده است", {
      id: "create-category-toast",
    });
}
export function notifUpdateCategory(isMutating: boolean, res: any, error: any) {
  if (isMutating)
    toast.loading("در حال ویرایش دسته بندی ...", {
      id: "update-category-toast",
    });
  if (res)
    toast.success("دسته بندی  با موفقیت ویرایش شد", {
      id: "update-category-toast",
    });
  if (error)
    toast.error("در ویرایش دسته بندی  مشکلی ایجاد شده است", {
      id: "update-category-toast",
    });
}
export function notifCreateTag(isMutating: boolean, res: any, error: any) {
  if (isMutating)
    toast.loading("در حال ایجاد برچسب ...", {
      id: "create-tag-toast",
    });
  if (res)
    toast.success("برچسب جدید با موفقیت اضافه شد", {
      id: "create-tag-toast",
    });
  if (error)
    toast.error("در ایجاد برچسب جدید مشکلی ایجاد شده است", {
      id: "create-tag-toast",
    });
}
export function notifUpdateTag(isMutating: boolean, res: any, error: any) {
  if (isMutating)
    toast.loading("در حال ویرایش برچسب ...", {
      id: "update-tag-toast",
    });
  if (res)
    toast.success("برچسب  با موفقیت ویرایش شد", {
      id: "update-tag-toast",
    });
  if (error)
    toast.error("در ویرایش برچسب  مشکلی ایجاد شده است", {
      id: "update-tag-toast",
    });
}
export function notifCreateSlider(isMutating: boolean, res: any, error: any) {
  if (isMutating)
    toast.loading("در حال ایجاد اسلاید ...", {
      id: "create-slide-toast",
    });
  if (res)
    toast.success("اسلاید جدید با موفقیت اضافه شد", {
      id: "create-slide-toast",
    });
  if (error)
    toast.error("در ایجاد اسلاید جدید مشکلی ایجاد شده است", {
      id: "create-slide-toast",
    });
}
export function notifUpdateSlider(isMutating: boolean, res: any, error: any) {
  if (isMutating)
    toast.loading("در حال ویرایش اسلاید ...", {
      id: "update-slide-toast",
    });
  if (res)
    toast.success("اسلاید  با موفقیت ویرایش شد", {
      id: "update-slide-toast",
    });
  if (error)
    toast.error("در ویرایش اسلاید  مشکلی ایجاد شده است", {
      id: "update-slide-toast",
    });
}

