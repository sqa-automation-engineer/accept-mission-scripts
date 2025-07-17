import { test, expect } from '@playwright/test';
import path from 'path';
import { execPath } from 'process';
import { clearScreenDown } from 'readline';

// test('Login and Add Idea', async ({ page }) => 

// {
//     await page.goto('https://test123.acceptmission.com/login');
//     await page.locator("//input[@id='user_email']").type('Muhammad.sqa103@gmail.com');
//     await page.locator("//input[@id='user_password']").type('Testing@123!');
//     await page.locator("//input[@name='commit']").click();
//     await expect(page).toHaveURL('https://test123.acceptmission.com/admin-studio');
//     await page.locator("//div[@class='flex-box']//span[contains(text(),'Ideas')]").click();
//     await expect(page).toHaveURL("https://test123.acceptmission.com/studio/ideas/2/kanban");
//     await page.locator("//ul[@id='31']//div[@id='liveideacardbtn']//a[@href='#']//span[contains(text(),'Add item')]").click();
//     await expect(page.locator("//textarea[@id='add_direct_idea_title_31']")).toBeVisible();
//     await page.locator("//textarea[@id='add_direct_idea_title_31']").type('Automation Test Idea');
//     await page.keyboard.press('Enter');
//     await page.locator("//li[@id='206']//div[@class='card hoverable hoverableCard category-item']").click();
//     await expect(page).toHaveURL("https://test123.acceptmission.com/studio/ideas/automation-test-idea-41fcbb2c-1ee2-440a-a8e8-031f300f4159");
//     await page.goto('https://test123.acceptmission.com/studio/ideas/automation-test-idea-41fcbb2c-1ee2-440a-a8e8-031f300f4159');
//     await page.locator("//button[@id='create-idea-admin']").click();
// });

// test('Add Idea', async ({ page }) => {
//   await page.goto('https://test123.acceptmission.com/login');

//   await page.locator("//input[@id='user_email']").type('Muhammad.sqa103@gmail.com');
//   await page.locator("//input[@id='user_password']").type('Testing@123!');
//   await page.locator("//input[@name='commit']").click();
//   await expect(page).toHaveURL('https://test123.acceptmission.com/admin-studio');

//   await page.locator("//a[@href='/home']//div[@class='card-content']").click();
//   await expect(page).toHaveURL('https://test123.acceptmission.com/home');
//   await expect(page.locator("//h1[normalize-space()='NEW ACCEPT MISSION FOR TESTING']")).toBeVisible();
//   await expect(page.locator("//h3[normalize-space()='NEW ACCEPT MISSION']")).toBeVisible();
//   await expect(page.locator("//img[@class='responsive-img rounded-full h-12 w-12']")).toBeVisible();

//   await page.locator("//span[normalize-space()='Introduction']").click();
//   await expect(page.locator("//div[@id='viewmissiondec']")).toBeVisible();

//   await page.locator("//a[normalize-space()='Submit Idea']").click();
//   await expect(page.locator("//img[@class='h-10 w-auto']")).toBeVisible();
//   await expect(page.locator("//a[@id='defaultOpen']")).toBeVisible();

//   await page.locator("//div[@class='flex items-center gap-2 text-white text-lg py-2 px-4 rounded-lg bg-gray-900/60']").click();
//   await expect(page.locator("//div[@id='radix-«r0»']")).toBeVisible();
// //   await page.locator("//input[@class='file_input absolute inset-0 opacity-0 cursor-pointer group-").click();

//   await page.locator("//input[@class='file_input absolute inset-0 opacity-0 cursor-pointer group-").click();

//   const [fileChooser] = await Promise.all([
//     page.waitForEvent('filechooser'),
//     page.locator("//input[@id='idea_image']").click(),
//   ]);
//   const filePath = path.resolve(__dirname, 'files/STAMP.jpg');
//   await fileChooser.setFiles(filePath);

//   await page.waitForTimeout(2000);
//   await page.locator("//span[normalize-space()='Save']").click();
//   await page.locator("//a[@class='modal-close btn-flat']//span[contains(@class,'flex items-center text-lg')]//*[name()='svg']").click();

//   await page.locator("//div[contains(@class,'input-field description-field')]//div[contains(@role,'button')][normalize-space()='p']").click();
//   await page.locator("//div[@class='input-field description-field']//div[@class='tox-edit-area']").click();
//   await page.locator("//div[@class='input-field description-field']//div[@class='tox-edit-area']").type('Descriptive text for creating ideas');

//   await page.locator("//div[@class='flex items-center text-sm font-medium border border-gray-300 rounded-lg md:ml-auto max-lg:order-1']//span[contains(text(),'Submit Idea')]").click();
//   await page.locator("//textarea[@id='idea-title-field']").type('New Idea for test automation');

//   await page.locator("//button[normalize-space()='Select Department']").click();
//   await page.locator("//div[contains(text(),'Quality Assurance')]").click();

//   await page.locator("//div[@class='flex items-center justify-between w-full mx-auto']").click();
//   await page.locator("//span[normalize-space()='New Category']").click();

//   // Comment Section
//   await page.locator("//a[@id='comment_tablink']").click();
//   await expect(page.locator("//h2[normalize-space()='Comments']")).toBeVisible();
//   await page.locator("//textarea[@placeholder='Write your comment...']").type('HERE IS NEW COMMENT');
//   await page.locator("//span[@class='flex flex-shrink-0 items-center svg-icon px-3']").click();
//   await page.locator("//img[@alt='shushing face']").click();
//   await page.locator("//button[normalize-space()='Submit']").click();

//   // Files Section
//   await page.locator("//a[@id='addfiles_tablink']").click();
//   await expect(page.locator("//h3[normalize-space()='Add Link']")).toBeVisible();
//   await page.locator("//input[@id='attachment_name_idea_attachment']").type('This is a file');
//   await page.locator("//input[@id='attachment_link_idea_attachment']").type("https://test123.acceptmission.com/studio/ideas/2/kanban");
//   await page.locator("//button[normalize-space()='Add Link']").click();

//   await page.locator("//div[@class='flex items-center text-sm font-medium border border-gray-300 rounded-lg md:ml-auto max-lg:order-1']//span[contains(text(),'Submit Idea')]").click();
//   await expect(page).toHaveURL("https://test123.acceptmission.com/ideabox/1/inbox_timeline?celebration=basic&new_mission_idea=312");

//   await page.locator("//a[normalize-space()='Back to home']").click();
//   await expect(page).toHaveURL("https://test123.acceptmission.com/home");

//   await page.waitForTimeout(2000);

//   await page.locator("//span[normalize-space()='All Ideas']").click();
//   await expect(page.locator("//div[@id='allideastab']//a[normalize-space()='All Ideas']")).toBeVisible();

//   await page.waitForTimeout(2000);
// });

test('Idea Details page', async ({ page }) => 
{
    await page.goto('https://test123.acceptmission.com/login');

    await page.locator("//input[@id='user_email']").type('Muhammad.sqa103@gmail.com');
    await page.locator("//input[@id='user_password']").type('Testing@123!');
    await page.locator("//input[@name='commit']").click();

    // Wait until after login
    await expect(page).toHaveURL('https://test123.acceptmission.com/admin-studio');

    // Click the "Ideas" card/tab to navigate to kanban view
    await page.locator("//span[@class='title-card'][normalize-space()='Ideas']").click();

    // Wait for redirect or load
    await page.waitForLoadState('networkidle');

    // Now assert the correct redirected URL
    await expect(page).toHaveURL("https://test123.acceptmission.com/studio/ideas/2/kanban");
    await expect(page.locator("//span[normalize-space()='New Idea with Automation']")).toBeVisible();
    await page.locator("//span[normalize-space()='New Idea with Automation']").click();

    await expect(page).toHaveURL("https://test123.acceptmission.com/studio/ideas/new-idea-with-automation");

    await page.locator("//span[normalize-space()='Idea']").click();
    await expect(page.locator("//label[normalize-space()='Title *']")).toBeVisible();
    // await page.locator("//input[@id='idea-title-field']").fill('New Idea with Automation');

    await page.locator("//iframe[@id='idea_content_ifr']").click();
    // await page.locator("//p[@contenteditable='true']").fill('Descriptive text for creating ideas');
    
    await page.locator("//input[@id='fname']").fill('Automation');
    await page.locator("//button[@id='create-idea-admin']").click();
    await page.waitForTimeout(3000);

    await page.locator("//button[@data-href='#details']").click();
    await expect(page.locator("//div[@class='input-field idea_funnels']")).toBeVisible();

// Open the dropdown (funnel selector)
    await page.getByText('QA Testing (Bugs)').click();
// Wait and click the "QA Testing (Bugs)" item
    await page.locator("//div[contains(text(),'QA Testing (Bugs)')]").click();

// Department
    await expect (page.locator("//label[normalize-space()='Department']")).toBeVisible();
    await page.locator("//span[contains(text(),'Quality Assurance')]").click();
    await page.locator("//div[contains(text(),'Quality Assurance')]").click();
//Ideas
    await expect(page.locator("//label[normalize-space()='Idea type']")).toBeVisible();
    await page.getByText('Ideas').click();
    await page.locator("//div[contains(text(),'Ideas')]").click();

    await page.waitForTimeout(5000);

});

